import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private user_service: UserService
    ) { this.loginForm = this.formBuilder.group({
      email: formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: formBuilder.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  // Get Form Controls
  public control(name: string) {
    return this.loginForm.get(name);
  }

  // Submit Form
  public onSubmit() {
    this.user_service.loginUser(this.loginForm.value).subscribe({
      next: (res) => {
        //response
        console.log(res);
      },
      error: (error) => {
        //handle error
        console.log(error);
      },
      complete: () => {
        console.log('Request complete');
      },
    });
  }

  ngOnInit(): void {}

}




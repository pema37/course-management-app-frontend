import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { error } from 'console';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private user_service: UserService ) {
    this.registerForm = this.formBuilder.group({
      email: formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: formBuilder.control('', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }
  // Get Form Controls
  public control(name: string) {
    return this.registerForm.get(name);}

    // Submit Form
    public onSubmit() {
      this.user_service.registerUser(this.registerForm.value).subscribe({
        next: (res) => {
          //response
          console.log(res);
        },
        error: (error) => {
          //handle error
          console.log(error);
        },
        complete: () => {
          console.log('Request Complete');
        },
      });
    }

  ngOnInit(): void {}

}








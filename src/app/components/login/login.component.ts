import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



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
    private router: Router,
    private formBuilder: FormBuilder,
    private user_service: UserService,
    private toastr: ToastrService
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
      next: (res: any) => {
        //response
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/list-course']);
        this.toastr.success('Login successful');
      },
      error: (error) => {
        //handle error
        console.log(error);
        this.toastr.error(error.error.message);
      },
      complete: () => {
        console.log('Request complete');
      },
    });
  }

  ngOnInit(): void {}

}




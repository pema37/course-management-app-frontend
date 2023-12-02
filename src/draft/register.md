test register.component.spec.ts : 

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: Router;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [ { provide: Router, useValue: routerSpy } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Get the injected Router spy object
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "/register" on navigateToPage call', () => {
    component.navigateToPage();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
  });
});




















test register.component.ts : 

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router) { }

  navigateToPage() {
    this.router.navigateByUrl('/login');
  }
}














test register.component.html :

<div class="contain">
  <div class="row d-flex align-items-center justify-content-center">

    <form class="col-md-6">
      <div class="card px-5 py-5">
        <div class="form-input">
          <input type="text" class="form-control" placeholder="Email address">
        </div>
        <div class="form-input">
          <input type="password" class="form-control" placeholder="password">
        </div>
        <button class="btn btn-primary mt-4 signup">Register</button>
        <div class="text-center mt-4">
          <i>Already a member?</i>
          <a routerLink="/login" class="text-decoration-none"> Login</a>
        </div>
      </div>
    </form>

    <button (click)="navigateToPage()">Go to Login Page</button>

  </div>
</div>


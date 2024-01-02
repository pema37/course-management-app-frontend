import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserService } from '../services/user.service';




describe('AuthGuard', () => {

  let guard: AuthGuard;
  let userServiceMock: any;
  let routerMock: any;

  beforeEach( () => {

    // Mock UserService
    userServiceMock = { isLoggedIn: true };

    // Mock Router
    routerMock = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: UserService, useValue: userServiceMock },
        { provide: Router, useValue: routerMock }
      ],
    });

    guard = TestBed.inject(AuthGuard);

  });


  it('should be created', () => {
    expect(guard).toBeTruthy(); 
  });


  it('should navigate to login if not authenticated', () => {
    userServiceMock.isLoggedIn = false; // Set user as not logged in
    expect(guard.canActivate()).toBeFalse();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']); // Check that it navigates to login
  });


  it('should allow navigation if authenticated', () => {
    userServiceMock.isLoggedIn = true; // Set user as logged in
    expect(guard.canActivate()).toBeTrue();
  });
  
});





import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})


export class UserService {

  private baseURL = 'https://coursemanagementapp-16bfc3cfca92.herokuapp.com/';  

  constructor(
    private http: HttpClient, 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
    ) {
    this.handleError = this.handleError.bind(this);
  }

  get isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('token');
      return !!user;
    }
    return false; // Default to not logged in if not in browser environment
  }

  registerUser(user: any) {
    return this.http.post( `${this.baseURL}/api/register`, user ).pipe(
      catchError(this.handleError)
    );
  }

  loginUser(user: any) {
    return this.http.post( `${this.baseURL}/api/login`, user).pipe(
      catchError(this.handleError)
    );
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!'; 
    if (error.error instanceof ErrorEvent) { // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${error.error.message}`;
    } 
    else { // The backend returned an unsuccessful response code.
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}











// constructor(private http: HttpClient, private router: Router) {
//   this.handleError = this.handleError.bind(this);
// }

// get isLoggedIn(): boolean {
//   const user = localStorage.getItem('token');
//   return !!user;
// }



// const user = localStorage.getItem('token') as string;
// return user !== null ? true : false;


// private baseURL = 'https://course-mgt-app.herokuapp.com' 
// private baseURL = 'https://course-management-app-backend.onrender.com';
// private baseURL = 'https://coursemanagementapp-16bfc3cfca92.herokuapp.com/';

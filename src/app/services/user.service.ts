import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})


export class UserService {

  private baseURL = 'https://course-management-app-backend.onrender.com';

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post( `${this.baseURL}/api/register`, user );
  }

  loginUser(user: any) {
    return this.http.post( `${this.baseURL}/api/login`, user);
  }


}

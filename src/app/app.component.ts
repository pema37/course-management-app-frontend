import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { UserService } from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    HttpClientModule
  ], 
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss']
})


export class AppComponent {
  title = 'Course Management App';

  constructor(
    public user_service: UserService) {}

}


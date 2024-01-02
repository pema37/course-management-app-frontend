import { CommonModule } from "@angular/common";
import { FetchBackend, HttpBackend, HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserService } from "./services/user.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { 
      provide: HttpBackend, 
      useClass: FetchBackend,
    }, 

    UserService // Provide UserService at the component level
  ],
})

export class AppComponent {
  title = 'Course Management App';
  constructor(public user_service: UserService) {} // Inject UserService
}




















// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router'; 
// import { UserService } from './services/user.service';
// import { HttpClientModule } from '@angular/common/http';



// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     HttpClientModule, // Provides HttpClient for the whole application
//     CommonModule, 
//     RouterModule
//   ], 
//   templateUrl: './app.component.html',
//   styleUrls:  ['./app.component.scss'],
//   providers: [UserService], // Provide UserService at the component level  
// })

// export class AppComponent {
//   title = 'Course Management App';
//   constructor(public user_service: UserService) {} // Inject UserService
// }




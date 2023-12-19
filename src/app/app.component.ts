import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // Use RouterModule here
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss']
})



export class AppComponent {
  title = 'Course Management App';
}


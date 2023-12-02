import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,           // Mark the component as standalone
  imports: [CommonModule],     // Import CommonModule for common directives
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']  // Corrected from 'styleUrl' to 'styleUrls'
})
export class CourseListComponent {
  // Component logic goes here
}



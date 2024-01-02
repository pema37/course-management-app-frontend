import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-course-list',
  standalone: true,           
  imports: [CommonModule, RouterModule],    
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']  
})


export class CourseListComponent {
  // Component logic goes here
  courses: any;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
        console.log(this.courses);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editCourse(id: any) {
    this.router.navigate([`/edit-course/${id}`]);
  }
}



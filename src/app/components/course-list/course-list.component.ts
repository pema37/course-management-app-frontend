import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-course-list',
  standalone: true,           
  imports: [CommonModule, RouterModule],    
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']  
})


export class CourseListComponent implements OnInit {
  courses: any;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private toastr: ToastrService
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

  deleteCourse(id: any) {
    this.courseService.deleteCourse(id).subscribe({
      next: (res: any) => {
        //response
        console.log(res);
        this.fetchCourses();
        this.toastr.success(res.message);
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
}



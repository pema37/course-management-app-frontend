import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})



export class CreateCourseComponent {
  createForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private courseService: CourseService
    ) {

    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      isCompleted: ['', Validators.required],
      link: ['', Validators.required],
      platform: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addCourse() {
    const { value } = this.createForm;

    this.courseService.addCourse(value).subscribe({
      next: (res: any) => {
        // response
        this.router.navigate(['/list-course']);
      },
      error: (error) => {
        // handle error
        console.log(error);
      },
      complete: () => {
        console.log('Request complete');
      },
    });
  }

  ngOnInit() {};

}




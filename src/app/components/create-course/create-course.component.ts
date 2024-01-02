import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})



export class CreateCourseComponent implements OnInit {
  createForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private courseService: CourseService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
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
    this.spinner.show();
    this.courseService.addCourse(value).subscribe({
      next: (res: any) => {
        // response
        this.router.navigate(['/list-course']);
        this.toastr.success('Course Added Successful');
        this.spinner.hide();
      },
      error: (error) => {
        // handle error
        console.log(error);
        this.toastr.error(error.error.message);
        this.spinner.hide();
      },
      complete: () => {
        console.log('Request complete');
      },
    });
  }

  ngOnInit() {};

}




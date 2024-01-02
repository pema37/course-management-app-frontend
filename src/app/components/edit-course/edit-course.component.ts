import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})


export class EditCourseComponent implements OnInit {

  id!: any;
  updateForm!: FormGroup;
  course: any

  constructor(
    private courseService: CourseService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService

  ){
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      isCompleted: ['', Validators.required],
      link: ['', Validators.required],
      platform: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(){
    this.actRoute.params.subscribe( (params) => {
      this.id = params['id'];
      this.courseService.getCourseById(this.id).subscribe( (res) => {
        this.course = res;
        this.updateForm.get('name')?.setValue(this.course.name);
        this.updateForm.get('isCompleted')?.setValue(this.course.isCompleted);
        this.updateForm.get('link')?.setValue(this.course.link);
        this.updateForm.get('platform')?.setValue(this.course.platform);
        this.updateForm.get('description')?.setValue(this.course.description);
      });
    });
  }

  updateCourse() {
    const { value } = this.updateForm;
    console.log('value', this.id);
    this.spinner.show();
    this.courseService.updateCourse(this.id, value).subscribe({
      next: (res: any) => {
        //response
        this.router.navigate(['/list-course']);
        this.toastr.success('Course Updated Successfully');
        this.spinner.hide();
      },
      error: (error) => {
        //handle error
        console.log(error);
        this.toastr.error(error.error.message);
        this.spinner.hide();
      },
      complete: () => {
        console.log('Request complete');
      },
    });
  }
}



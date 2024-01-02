import { Component, Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CourseListComponent } from './components/course-list/course-list.component';



export const routes: Routes = [
  { path: 'create-course', component: CreateCourseComponent, canActivate: [AuthGuard] },

  { path: 'edit-course/:id', component: EditCourseComponent, canActivate: [AuthGuard] },

  { path: 'list-course', component: CourseListComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component:HomeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];



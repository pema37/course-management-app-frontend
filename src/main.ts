import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { provideHttpClient, withFetch, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { routes } from "./app/app.routes";
import { AppComponent } from "./app/app.component";
import { UserService } from "./app/services/user.service";
import { CourseService } from "./app/services/course.service";
import { TokenInterceptor } from "./app/auth/token.interceptor";




bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    provideHttpClient(withFetch()), 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    UserService,
    CourseService, 
  ],
}).catch(err => console.error(err));








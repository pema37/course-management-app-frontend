import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";

import { provideHttpClient, withFetch, HTTP_INTERCEPTORS } from "@angular/common/http";


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








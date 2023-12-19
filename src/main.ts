import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    HttpClientModule
  ]
})
.catch(err => console.error(err));



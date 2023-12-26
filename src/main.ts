import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpBackend, HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';




bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient().withFetch(),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
})
.catch(err => console.error(err));








// bootstrapApplication(AppComponent, {
//   providers: [
//     {
//       provide: HttpClient,
//       useFactory: (handler: HttpBackend) => {
//         // configure HttpClient to use fetch API
//         return new HttpClient(handler).withFetch();
//       },
//       deps: [HttpBackend]
//     },
//     provideRouter(routes),
//     importProvidersFrom(HttpClientModule)
//   ]
// })
// .catch(err => console.error(err));



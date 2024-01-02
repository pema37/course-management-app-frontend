import { Injectable } from '@angular/core';

import { 
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpInterceptorFn 
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { request } from 'http';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}



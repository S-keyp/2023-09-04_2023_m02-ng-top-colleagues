import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  // TODO récupérer le jeton sauvegardé précédemment (compléter ???)
  const authToken = localStorage.getItem("access_token");
  console.log('INTERCEPTOOOOOOOOR');
  if(authToken) {
    const cloned = request.clone({
      headers: request.headers.set("Authorization",
        "Bearer " + authToken)
    });
	console.log('CLONED:', cloned);
    return next.handle(cloned);
  } else {
    return next.handle(request);
  }
}}

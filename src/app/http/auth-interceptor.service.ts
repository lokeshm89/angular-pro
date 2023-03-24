import { Injectable } from '@angular/core';
import {HttpInterceptor} from "@angular/common/http";
import {HttpHandler, HttpRequest} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({params:req.params.append('Auth','xyz')});
    return next.handle(modifiedRequest);
  }
}

import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpEvent,HttpRequest,HttpHandler } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('token');

      if(token){
        req = req.clone({
          setHeaders:{
            authorization:`Bearer ${token}`
          }
        });
      };

      return next.handle(req);
  }
}

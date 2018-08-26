// import { Injectable, Injector } from '@angular/core';
// import { HttpInterceptor } from '@angular/common/http';
// import { AuthService } from './auth.service'

// @Injectable()
// export class TokenInterceptorService implements HttpInterceptor {

//   constructor(private injector: Injector) { }

//   intercept(req, next){
//     let authservice = this.injector.get(AuthService)
//     let tokenizedReq = req.clone({
//       setHeaders: {
//         Authorization: `token ${authservice.getToken()}`
//       }
//     })
//     return next.handle(tokenizedReq)
//   }
// }

import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { AuthService } from './auth.service'

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice = this.injector.get(AuthService)
    const token: string = authservice.getToken();

    // const authReq = req.clone({
    //   headers: req.headers.set('Authorization', 'token ${authservice.getToken()}')
    // });
    // return next.handle(authReq);
    if (token) {
        req = req.clone({ headers: req.headers.set('Authorization', 'Token ' + token) });
    }

    if (!req.headers.has('Content-Type')) {
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }
    
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    return next.handle(req);

  }
}
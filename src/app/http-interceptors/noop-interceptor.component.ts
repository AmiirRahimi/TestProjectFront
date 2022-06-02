import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders : {
        'Access-Control-Allow-Headers':'Origin , content-type',
        'Access-Control-Allow-Origin' : '*'
      }
    })
    return next.handle(request).pipe(catchError(error => {
      console.log(error);
      return throwError('hi')
    }));
  }
}
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('HttpsInterceptor req => ', req, req.url.search('http://'));
        if (!req.headers.has('Content-Type')) {
            req = req.clone({
              headers: req.headers.set('Content-Type', 'application/json')
            });
          }
        if (req.url.search('http://') === 0) {
            const httpsReq = req.clone({
                url: req.url.replace('http://', 'https://')
            });
            return next.handle(httpsReq);
        } else {
            return next.handle(req);
        }
    }
}

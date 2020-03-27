import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

@Injectable()
export class ConvertresInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (!req.headers.has('Content-Type')) {
                    req = req.clone({
                      headers: req.headers.set('Content-Type', 'application/json')
                    });
                  }
                if (event instanceof HttpResponse) {
                    function toConvert(ele) {
                        const fr = ele.charAt(0).toLowerCase();
                        const full = fr + ele.slice(1);
                        return full;
                    }
                    const resObj = event.body;
                    const sample = Object.keys(resObj).map(key => ({
                        [toConvert(key)]: resObj[key]}
                    ));
                    const newObj = Object.assign({}, ...sample);
                    console.log('ConvertresInterceptor event.body => ', newObj);
                    const newRes = event.clone({body: newObj});
                    return newRes;
                }
            })
        );
    }
}

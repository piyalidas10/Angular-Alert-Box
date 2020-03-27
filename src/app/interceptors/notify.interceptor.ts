import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                console.log('NotifyInterceptor event => ', event);
                /*
                The HTTP 201 Created success status response code indicates
                that the request has succeeded and has led to the creation of a resource
                */
                console.log('NotifyInterceptor status code => ', event.status);
                if (event instanceof HttpResponse && event.status === 201) {
                    this.toastr.success('Successfully created');
                }
            })
        );
    }
}

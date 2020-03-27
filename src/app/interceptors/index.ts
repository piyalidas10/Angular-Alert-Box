import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpsInterceptor } from './https.interceptor';
import { ConvertresInterceptor } from './convertres.interceptor';
import { NotifyInterceptor } from './notify.interceptor';
import { HeaderInterceptor } from './header.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ConvertresInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotifyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ];

# Run Application
```
ng serve
localhost:4200/
```

# Alert Component Template
Path: /app/shared/alert.component.html
The alert component template contains the html for displaying alert messages at the top of the page.

```
<div *ngIf="alertMsg && alertMsg.text !== undefined"
[ngClass]="{ 'alert': alertMsg, 'alert-success': alertMsg.type === 'success', 'alert-danger': alertMsg.type === 'error' }">
<i *ngIf="alertMsg.type === 'error'" class="fa fa-times-circle" aria-hidden="true"></i>
<i *ngIf="alertMsg.type === 'success'" class="fa fa-check-circle" aria-hidden="true"></i>
{{alertMsg.text}}</div>
```

# App component
The app component passes alert messages to the template whenever a message is received from the message service. It does this by subscribing to the message service's getMessage() method which returns an Observable.

```
showAlert() {
    this.msgService.getMessage().subscribe(message => {
      this.alertMsg = message;
      console.log('showMsgAlert => ', this.alertMsg);
    });
  }
```

  # Message service

The message service enables any component in the application to display alert messages at the top of the page via the app component.

It has methods for displaying success and error messages, and a getMessage() method that returns an Observable that is used by the app component to subscribe to notifications for whenever a message should be displayed.

```
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];
  private alertmsg = new BehaviorSubject<any>({});
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
            if (this.keepAfterNavigationChange) {
                // only keep for a single location change
                this.keepAfterNavigationChange = false;
            } else {
                // clear alert
                this.alertmsg.next({});
            }
        }
    });
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.alertmsg.next({ type: 'success', text: message });
    console.log('message service success => ', keepAfterNavigationChange);
  }

  error(message: string, keepAfterNavigationChange = false) {
      this.keepAfterNavigationChange = keepAfterNavigationChange;
      this.alertmsg.next({ type: 'error', text: message });
      console.log('message service error => ', this.keepAfterNavigationChange, message);
  }

  getMessage() {
      return this.alertmsg.asObservable();
  }

}
```

# Success component
Send sucess message to success method of the message service

```
this.msgService.success('sucessfully completed', true);
```


# Error component
Send error message to error method of the message service

```
this.msgService.error('errors occured', true);
```


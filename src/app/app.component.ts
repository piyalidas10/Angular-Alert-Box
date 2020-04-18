import { Component, OnInit } from '@angular/core';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  alertMsg: any;

  constructor(private msgService: MessageService) {}

  ngOnInit() {
    this.showAlert();
  }

  showAlert() {
    this.msgService.getMessage().subscribe(message => {
      this.alertMsg = message;
      console.log('showMsgAlert => ', this.alertMsg);
    });
  }
}

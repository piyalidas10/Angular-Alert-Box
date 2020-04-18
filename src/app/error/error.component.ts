import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private msgService: MessageService) { }

  ngOnInit() {
  }

  onErrorClick() {
    this.msgService.error('errors occured', true);
  }

}

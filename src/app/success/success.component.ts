import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private msgService: MessageService) { }

  ngOnInit() {
  }

  onSuccessClick() {
    this.msgService.success('sucessfully completed', true);
  }

}

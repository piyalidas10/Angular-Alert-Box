import { Component, OnInit } from '@angular/core';
import { constants } from './constants';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  links = [];

  ngOnInit() {
    this.links = Object.keys(constants);
    console.log('links => ', this.links);
  }
}

import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    template: `
            <h2 class="text-center">Httpinterceptor</h2>
            <table class="table">
                <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
                </tr>
                <tr *ngFor="let list of dataLists">
                <td>{{list.userId}}</td>
                <td>{{list.id}}</td>
                <td>{{list.title}}</td>
                <td>{{list.body}}</td>
                </tr>
            </table>
    `
})

export class HttpsComponent {
    dataLists: any;
    constructor(public apiService: ApiService) {
        this.getDataList();
    }

    // Example of Https Interceptor
  getDataList() {
    try {
      this.apiService.getData()
        .subscribe(
          data => {
            this.dataLists = data;
            console.log('dataLists => ', this.dataLists);
          },
          err => {
            console.log('Error => ', err);
          }
        );
    } catch (error) {
      console.log('error => ', error);
    }
  }
}

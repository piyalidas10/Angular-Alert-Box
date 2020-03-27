import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    template: `
            <h2 class="text-center">Header interceptor</h2>
            <table class="table">
                <tr>
                <th>postId</th>
                <th>id</th>
                <th>email</th>
                <th>body</th>
                </tr>
                <tr *ngFor="let list of dataLists">
                <td>{{list.postId}}</td>
                <td>{{list.id}}</td>
                <td>{{list.email}}</td>
                <td>{{list.body}}</td>
                </tr>
            </table>
    `
})
export class HeaderComponent {
    dataLists = [];
    constructor(public apiService: ApiService) {
        this.apiService.getDataWithHeader().subscribe(
            data => {
                this.dataLists = data;
                console.log('Header interceptor data => ', this.dataLists);
            }
        );
    }
}

import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    template: `
    <h2 class="text-center">Convert Response interceptor</h2>
    <div class="row">
        <div class="col">
        <h3>Request</h3>
        <pre>{{ requestObj | json }}</pre>
        </div>
        <div class="col">
        <h3>Response</h3>
        <pre>{{ data | json }}</pre>
        </div>
    </div>
    `
})
export class ConvertresComponent {
    data = {};
    requestObj = {};
    constructor(public apiService: ApiService) {
        this.requestObj = {
            Id: 1,
            Title: 'foo',
            Body: 'bar',
            UserId: 1
          };
        this.apiService.putData().subscribe(
            data => {
                this.data = data;
                console.log('Convert Response interceptor data => ', data);
            }
        );
    }
}

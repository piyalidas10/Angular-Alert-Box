import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    template: `
    `
})
export class NotifyComponent {
    constructor(public apiService: ApiService) {
        this.apiService.postData().subscribe(
            data => {
                console.log('data => ', data);
            }
        );
    }
}

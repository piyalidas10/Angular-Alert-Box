import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpsComponent } from './components/https.component';
import { ConvertresComponent } from './components/convertres.component';
import { NotifyComponent } from './components/notify.component';
import { HeaderComponent } from './components/header.component';
import { constants } from './constants';


const routes: Routes = [
    { path: constants.https, component: HttpsComponent},
    { path: constants.convertres, component: ConvertresComponent},
    { path: constants.notify, component: NotifyComponent},
    { path: constants.header, component: HeaderComponent}
];

@NgModule({
    declarations: [
        HttpsComponent,
        ConvertresComponent,
        NotifyComponent,
        HeaderComponent
    ],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [
        HttpsComponent,
        ConvertresComponent,
        NotifyComponent,
        HeaderComponent,
        RouterModule
    ]
})

export class AppRouting {
    constructor() {
        console.log ('con => ', constants);
    }
}


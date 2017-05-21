import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// app
import { WelcomeRoutes } from './welcome.routes';

@NgModule({
    imports: [
        RouterModule.forChild(WelcomeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class WelcomeRoutingModule { }

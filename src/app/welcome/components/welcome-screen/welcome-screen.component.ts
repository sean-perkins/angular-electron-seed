import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxElectronService } from './../../../ngx-electron/ngx-electron.service';

@Component({
    selector: 'seed-welcome-screen',
    templateUrl: './welcome-screen.component.html',
    styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent {

    constructor(
        private electron: NgxElectronService,
        private router: Router) { }

    gettingStarted(): void {
        this.electron.send('ping');
        this.electron.listener$.subscribe(message => {
            if (message === 'pong') {
                this.electron.shell.beep();
                this.router.navigate(['/getting-started']);
            }
        });
    }

}

import { NgxElectronService } from './../../../ngx-electron/ngx-electron.service';
import { Component } from '@angular/core';

@Component({
  selector: 'seed-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {

    constructor(private electron: NgxElectronService) {}

    viewAngular(): void {
        this.electron.shell.openExternal('https://angular.io/docs/ts/latest/');
    }

    viewElectron(): void {
        this.electron.shell.openExternal('https://electron.atom.io/docs/');
    }

    viewRepository(): void {
        this.electron.shell.openExternal('https://github.com/sean-perkins/angular-electron-seed');
    }

}

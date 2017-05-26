import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const ELECTRON_HOST = 'ELECTRON_BRIDGE_HOST';
const ELECTRON_CLIENT = 'ELECTRON_BRIDGE_CLIENT';

@Injectable()
export class NgxElectronService {

    private _electron: Electron.AllElectron = null;

    private listenerSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    listener$: Observable<any>;

    constructor() {
        this.listener$ = this.listenerSubject.asObservable();
        if (this.electron) {
            this.electron.ipcRenderer.on(ELECTRON_CLIENT, (event, msg) => {
                this.listenerSubject.next(msg);
            });
        }
    }

    send(data: any): void {
        this.ipcRenderer.send(ELECTRON_HOST, data);
    }

    get ipcRenderer(): Electron.IpcRenderer {
        return this.electron.ipcRenderer || null;
    }

    get desktopCapturer(): Electron.DesktopCapturer {
        return this.electron.desktopCapturer || null;
    }

    get webFrame(): Electron.WebFrame {
        return this.electron.webFrame || null;
    }

    get remote(): Electron.Remote {
        return this.electron.remote || null;
    }

    get clipboard(): Electron.Clipboard {
        return this.electron.clipboard || null;
    }

    get crashReporter(): Electron.CrashReporter {
        return this.electron.crashReporter || null;
    }

    get nativeImage(): Electron.NativeImage {
        return <any>this.electron.nativeImage || null;
    }

    get screen(): Electron.Screen {
        return this.electron.screen || null;
    }

    get shell(): Electron.Shell {
        return this.electron.shell || null;
    }

    get electron() {
        if (!this._electron) {
            this._electron = window ? window['electron'] : null;
        }
        return this._electron;
    }

}

import { Routes } from '@angular/router';
// app
import { WelcomeScreenComponent, GettingStartedComponent } from './components/index';


export const WelcomeRoutes: Routes = [
    {
        path: 'welcome',
        component: WelcomeScreenComponent
    },
    {
        path: 'getting-started',
        component: GettingStartedComponent
    }
];

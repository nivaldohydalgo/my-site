import { Routes } from '@angular/router';

import { Home } from './contents/home/home';
import { About } from './contents/about/about';
import { PageNotFound } from './contents/page-not-found/page-not-found';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFound },
];

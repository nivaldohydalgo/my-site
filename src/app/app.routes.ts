import { Routes } from '@angular/router';

import { Home } from './contents/home/home';
import { Learn } from './contents/learn/learn';
import { About } from './contents/about/about';
import { PageNotFound } from './contents/page-not-found/page-not-found';

import { English } from './contents/learn/english/english'
import { Spanish } from './contents/learn/spanish/spanish'

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'learn', component: Learn },
    { path: 'about', component: About },

    { path: 'learn-english', component: English },
    { path: 'learn-spanish', component: Spanish },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFound },
];

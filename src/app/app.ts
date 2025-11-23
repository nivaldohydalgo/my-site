import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../app/components/header/header';
import { Footer } from '../app/components/footer/footer';
// import { Menu } from '../app/components/menu/menu';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        Header,
        Footer,
//        Menu,        
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('my-site');
}

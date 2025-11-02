import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Menu } from '../../components/menu/menu';

@Component({
    selector: 'app-main',
    imports: [
        RouterOutlet,
        Header,
        Footer,
        Menu,
    ],
    templateUrl: './main.html',
    styleUrl: './main.css'
})
export class Main {

}

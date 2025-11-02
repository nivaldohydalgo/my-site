import { Component, signal } from '@angular/core';
import { Main } from './views/main/main';

@Component({
    selector: 'app-root',
    imports: [Main],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('my-site');
}

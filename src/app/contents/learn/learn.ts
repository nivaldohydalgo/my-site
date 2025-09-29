import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Card } from '../../components/card/card';

@Component({
    selector: 'app-learn',
    imports: [
        RouterLink,
        Card,
    ],
    templateUrl: './learn.html',
    styleUrl: './learn.css'
})

export class Learn {

}

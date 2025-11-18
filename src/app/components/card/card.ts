import { Component , Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-card',
    imports: [
        RouterLink,
    ],
    templateUrl: './card.html',
    styleUrl: './card.css'
})
export class Card {

    @Input({ required: true }) image!: String;
    @Input({ required: true }) section!: String;
    @Input({ required: true }) title!: String;
    @Input({ required: true }) description!: String;
    @Input({ required: true }) button!: String;
    @Input({ required: true }) router!: String;

}

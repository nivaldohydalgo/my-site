import { Component , HostListener, Input } from '@angular/core';
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

    screenWidth: number = window.innerWidth;
    screenHeight: number = window.innerHeight;
    cardWidth: number = this.calcWidth(this.screenWidth);
    imageWidth: number = this.cardWidth / 4;
    imageHeight: number = this.imageWidth * 0.75;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.cardWidth = this.calcWidth(this.screenWidth);
        this.imageWidth = this.cardWidth / 4;
        this.imageHeight = this.imageWidth * 0.75;
    }

    private calcWidth(w: number) {
        if ( w <= 768 ) {
            return w * 0.91;
        } 
        return 700 + ( ( w - 768) / 4 );
    }

}

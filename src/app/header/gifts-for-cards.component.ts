import { Component, Input } from "@angular/core";

@Component({
    selector: 'etsy-gifts-for-cards',
    templateUrl: 'gifts-for-cards.component.html',
})
export class GiftsForCardsComponent {
    @Input() 
    title! :string;
    @Input()
    imagePath!: string;
}

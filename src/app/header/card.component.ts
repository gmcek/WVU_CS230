import { Component } from "@angular/core";
import { mock_cards } from "./mock-cards";
import { Card } from "./cards.model";

@Component({
    selector: "etsy-gifts-for-cards",
    templateUrl: "card.component.html"
})
export class GiftsCardComponent {
    card:Card[] = [];

    constructor() {
        for (var playlist of mock_cards) {
            this.card.push(new Card(card));
        }
    }
}

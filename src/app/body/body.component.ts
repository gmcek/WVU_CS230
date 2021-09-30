import { Component } from "@angular/core";
import { mock_lists } from "./mock-lists";
import { Card } from "./list.model";
import { mock_productCards } from "./mock-product-cards";
import { ProductCard } from "./productCard.model";

@Component({
    selector: "etsy-body",
    templateUrl: "body.component.html"
})
export class BodyComponent {
    lists:Card[] = [];
    productcards:ProductCard[] =[];

    constructor() {
        for (var list of mock_lists) {
            this.lists.push(new Card(list));
        }

        for (var productCard of mock_productCards) {
            this.productcards.push(new ProductCard(productCard));
        }
    }
}

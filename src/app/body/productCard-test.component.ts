import { Component, OnInit } from '@angular/core';
import { mock_productCards } from './mock-product-cards';
import { productCardsService } from './productCard.service';
import { ProductCard } from './productCard.model';

@Component({
    selector: 'app-etsy-product-card',
    templateUrl: './productCard-test.component.html'
})

export class TestProductCardComponent implements OnInit {
    cards:ProductCard[] = [];

    constructor (private ProductCardService: productCardsService){

    }

    ngOnInit(): void {
        this.ProductCardService.getProductCard().subscribe(data => {
            console.log(data);
            for (var item in data){
                console.log(data[item]);
                this.cards.push(new ProductCard(data[item]))
              }
        })
    }
}
import { Component, Input } from "@angular/core";

@Component({
    selector: "etsy-product-card",
    templateUrl: "productCard.component.html"
})
export class ProductCardComponent {
    @Input() title! :string;
    @Input() description! :string;
    @Input() imagePath!: string;
}
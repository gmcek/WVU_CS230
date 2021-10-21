import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class productCardsService {
    private baseUrl:string = 'https://etsy-app-4d3b6-default-rtdb.firebaseio.com/';
    private productCardEndpoint:string = 'productCards.json';
    
    constructor(private http: HttpClient) {

    }
    getProductCard() {
        return this.http.get<[]>(this.baseUrl + this.productCardEndpoint);
    }
}
/*import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { list } from "./list.model";

@Injectable({providedIn: 'root'})
export class listService {
    private baseUrl:string = 'https://etsy-app-4d3b6-default-rtdb.firebaseio.com/lists';
    private listEndpoint:string = 'list.json';
    
    constructor(private http: HttpClient) {

    }

    getUserInfo() {
        console.log(this.baseUrl + this.listEndpoint);
        return this.http.get<list>(this.baseUrl + this.listEndpoint);
    }
}
*/

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class listService {
    private baseUrl:string = 'https://etsy-app-4d3b6-default-rtdb.firebaseio.com/';
    private listEndpoint:string = 'lists.json';
    
    constructor(private http: HttpClient) {

    }
    getList() {
        return this.http.get<[]>(this.baseUrl + this.listEndpoint);
    }
}
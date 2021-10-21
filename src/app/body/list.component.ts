/*import { Component, Input } from "@angular/core";

@Component({
    selector: "etsy-card",
    templateUrl: "list.component.html"
})
export class CardComponent {
    @Input() 
    title! :string;
    @Input()
    description! :string;
    @Input()
    imagePath!: string;
}
*/

/*import { Component, Injectable, OnInit } from "@angular/core";
import { list } from "./list.model";
import { listService } from "./list.service";

@Component({
    selector: "etsy-card",
    templateUrl: "list.component.html"
})
export class listComponent implements OnInit {
    myInfo: list | undefined;

    constructor(private listService:listService) {
    }
    ngOnInit(): void {
        console.log("Registering showlist");
        this.showlist();
    }

    showlist() {
        this.listService.getUserInfo().subscribe((data: list) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}
*/

import { Component, Input } from "@angular/core";

@Component({
    selector: "etsy-card",
    templateUrl: "list.component.html"
})
export class listComponent {
    @Input() title! :string;
    @Input() description! :string;
    @Input() imagePath!: string;
}

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

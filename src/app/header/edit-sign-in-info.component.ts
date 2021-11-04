import { Component } from "@angular/core";
import { SignInInfo } from "./sign-in-info.model";
import { SignInInfoService } from "./sign-in-info.service";
import { DatabaseService } from "./database.service";

@Component({
    selector: 'etsy-edit-sign-in-info',
    templateUrl: 'edit-sign-in-info.component.html'
})
export class EditSignInInfoComponent {

    constructor(private signInInfoService: SignInInfoService, private dbService:DatabaseService) {
        dbService.showData();
    }

    onUpdateSignInInfo(data:SignInInfo) {
        this.signInInfoService.modifySignInInfo(data).subscribe(data => {
            console.log("Updated information sent to backend");
        })
    }
}
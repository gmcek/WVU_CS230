import { Component } from "@angular/core";
import { SignInInfo } from "./sign-in-info.model";
import { SignInInfoService } from "./sign-in-info.service";

@Component({
    selector: 'etsy-edit-sign-in-info',
    templateUrl: 'edit-sign-in-info.component.html'
})
export class EditSignInInfoComponent {

    constructor(private signInInfoService: SignInInfoService) {

    }

    onUpdateSignInInfo(data:SignInInfo) {
        this.signInInfoService.modifySignInInfo(data).subscribe(data => {
            console.log("Updated information sent to backend");
        })
    }
}
import { Component } from "@angular/core";
import { LoginInfo } from "./login-info.model";
import { LoginInfoService } from "./login-info.service";

@Component({
    selector: 'etsy-edit-login-info',
    templateUrl: 'edit-login-info.component.html'
})
export class EditLoginInfoComponent {

    constructor(private loginInfoService: LoginInfoService) {

    }

    onUpdateLoginInfo(data:LoginInfo) {
        this.loginInfoService.modifyLoginInfo(data).subscribe(data => {
            console.log("Updated information sent to backend");
        })
    }
}
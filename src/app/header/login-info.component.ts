import { Component, Injectable, OnInit } from "@angular/core";
import { LoginInfo } from "./login-info.model";
import { LoginInfoService } from "./login-info.service";

@Component({
    selector: "etsy-login-info",
    templateUrl: "login-info.component.html"
})

export class LoginInfoComponent implements OnInit {
    login: LoginInfo | undefined;

    constructor(private loginInfoService:LoginInfoService){
    }
    ngOnInit():void {
        console.log("Registering showLoginnInfo as a subscriber");
        this.showLoginInfo();
    }

    showLoginInfo(){
        this.loginInfoService.getLoginInfo().subscribe((data: LoginInfo) => {
            console.log(data);
            this.login = data;
        })
    }
}
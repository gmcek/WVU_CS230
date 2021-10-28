import { Component, Injectable, OnInit } from "@angular/core";
import { SignInInfo } from "./sign-in-info.model";
import { SignInInfoService } from "./sign-in-info.service";

@Component({
    selector: "etsy-sign-in-info",
    templateUrl: "sign-in-info.component.html"
})

export class SignInInfoComponent implements OnInit {
    signin: SignInInfo | undefined;

    constructor(private signInInfoService:SignInInfoService){
    }
    ngOnInit():void {
        console.log("Registering showSignInInfo as a subscriber");
        this.showSignInInfo();
    }

    showSignInInfo(){
        this.signInInfoService.getSignInInfo().subscribe((data: SignInInfo) => {
            console.log(data);
            this.signin = data;
        })
    }
}
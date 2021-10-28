import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SignInInfo } from "./sign-in-info.model";

@Injectable({providedIn: 'root'})
export class SignInInfoService {
    private baseUrl:string = 'https://etsy-app-4d3b6-default-rtdb.firebaseio.com/';
    private SignInEndpoint:string = 'Register.json';

    constructor(private http: HttpClient) {

    }

    getSignInInfo(){
        console.log(this.baseUrl + this.SignInEndpoint);
        return this.http.get<SignInInfo>(this.baseUrl + this.SignInEndpoint);
    }

    modifySignInInfo(data:SignInInfo) {
        return this.http.put(this.baseUrl + this.SignInEndpoint, data);
    }
}
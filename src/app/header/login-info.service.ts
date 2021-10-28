import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginInfo } from "./login-info.model";

@Injectable({providedIn: 'root'})
export class LoginInfoService {
    private baseUrl:string = 'https://etsy-app-4d3b6-default-rtdb.firebaseio.com/';
    private LoginEndpoint:string = 'Login.json';

    constructor(private http: HttpClient) {

    }

    getLoginInfo(){
        console.log(this.baseUrl + this.LoginEndpoint);
        return this.http.get<LoginInfo>(this.baseUrl + this.LoginEndpoint);
    }

    modifyLoginInfo(data:LoginInfo) {
        return this.http.put(this.baseUrl + this.LoginEndpoint, data);
    }
}
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { SignInInfo } from "./sign-in-info.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<SignInInfo []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<SignInInfo>('Register').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: SignInInfo []) => {
            console.log("Data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}

// https://etsy-app-4d3b6.web.app/home
import { Injectable } from '@angular/core';
import { AuthService } from 'angular2-social-login';
import {Observable} from 'rxjs/Rx'; import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    public UserInfo: any;
    private loggedIn = false;

    constructor(public _auth: AuthService) { }

    signIn(provider) {
           this._auth.login(provider).subscribe(
            (data) => {this.UserInfo = data; }
        );
    }

    logout() {

        this._auth.logout().subscribe(
        (data) => {
            // console.log(data);
            this.loggedIn = false;
            this.UserInfo = null;
            }
        );
    }

    isLoggedIn() {
        return this.loggedIn;
    }

}
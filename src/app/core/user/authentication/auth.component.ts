import { UserService } from './../user.service';

import { Component, OnDestroy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user-login',
    templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnDestroy {
    sub: any;

    constructor(public _user: UserService ) {}

    signIn(provider) {
        this.sub = this._user.signIn(provider);
    }

    logout() {
        this._user.logout();
    }

    ngOnDestroy() {
        this._user.logout();
    }
}
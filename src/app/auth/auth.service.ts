/*



import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of, pipe} from "rxjs";

//


import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user';

@Injectable({

   proviedeIn: 'root',

})
export class AuthService implements CanActivate {
    userKey = 'logged-in-user'

    constructor(private router: Router) {
    }

    userLogin(user: any): Observable<User> | any {
        if(user) {
     //       return of(this.login(this.userKey,new User(user.username, user.password))).pipe(15000);
        }
    }
    logout(): void {
        localStorage.removeItem(this.userKey);
        this.router.navigate(['/login']);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean  {
        if(state.url === '/login' ) {
            if(!this.getUser(this.userKey)) {
                return true;
            }
        }

    }

    private getUser(userKey: string) {
        return false;
    }

    private login(param: this) {
        return undefined;
    }
}

  */

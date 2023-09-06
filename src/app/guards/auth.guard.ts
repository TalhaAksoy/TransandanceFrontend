import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginServService } from '../services/loginServ/login-serv.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private loginServ: LoginServService) { }

	canActivate = (): Observable<boolean> => {
		return this.loginServ.getLoginState().pipe(
			tap(isAuthenticated => {
				if (!isAuthenticated) {
					this.router.navigate(['']);
				}
			}));
	}

}
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServService {

  constructor() { }

  private loginState$ = new BehaviorSubject<boolean>(false);

  setLoginState(state : boolean){
    this.loginState$.next(state);
    console.log("State Updated");
  }

  getLoginState() : Observable<boolean>{
    return this.loginState$.asObservable();
  }
}

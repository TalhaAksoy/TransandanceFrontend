import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServService {

  constructor() { }

  loginState : boolean = false;

  setLoginState(){
    this.loginState = true;
    console.log("State Updated");
  }

  getLoginState(){
    return this.loginState;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthModel } from 'src/app/models/auth.model';
import { LoginServService } from '../loginServ/login-serv.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  constructor(private http: HttpClient, private loginServ : LoginServService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  getData = (code_ : string) => {
    return this.http.post("http://10.11.31.03:4000/auth/callback", {code : code_}, this.httpOptions);
  }

  setUser() : AuthModel | any{
    const code = localStorage.getItem('code');
    if (code){
      this.getData(code).subscribe(response => {
        console.log("response =>",response);
        localStorage.setItem('user', JSON.stringify(response));
      })
    }

    const userStr = localStorage.getItem('user');
    if (userStr){
      const user : AuthModel = JSON.parse(userStr);
      this.loginServ.setLoginState();
      return user;
    }
  }
}

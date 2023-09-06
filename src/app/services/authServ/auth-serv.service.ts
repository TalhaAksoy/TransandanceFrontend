import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthModel } from 'src/app/models/auth.model';
import { LoginServService } from '../loginServ/login-serv.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServService {
  private apiUrl = "http://10.11.31.3:4000";
  constructor(private http: HttpClient, private loginServ : LoginServService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  sendToken(code_ : string) : Observable<AuthModel>
  {
    return this.http.post<AuthModel>('http://10.11.31.3:4000/auth/callback', {code : code_});
  }  
}

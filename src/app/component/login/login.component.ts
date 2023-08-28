import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from 'src/app/services/loginServ/login-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router:Router , private loginServ: LoginServService){}

  click() {
    this.loginServ.setLoginState();
    this.router.navigate(['/home']);
  }
}

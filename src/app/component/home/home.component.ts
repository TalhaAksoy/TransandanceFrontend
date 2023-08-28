import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from 'src/app/services/loginServ/login-serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private loginServ: LoginServService, private router:Router){}

  ngOnInit(){
    if (!this.loginServ.getLoginState())
    {
      // this.router.navigate(['']);
    }
  }
}

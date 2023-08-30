import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServService } from 'src/app/services/loginServ/login-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router:Router){}

  click() {
    window.location.href = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-9b4d3802ba3397c1184e417420151f215962f964b601d28a79b90e5a1581f9c7&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fauth%2Fcallback&response_type=code";
  }
}

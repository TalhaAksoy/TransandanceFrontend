import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServService } from 'src/app/services/loginServ/login-serv.service';
import { AuthServService } from 'src/app/services/authServ/auth-serv.service';
import { AuthModel } from 'src/app/models/auth.model';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss'],
})

export class OauthComponent {
  constructor(
    private loginServ: LoginServService,
    private activatedRoute: ActivatedRoute,
    private authServ: AuthServService,
    private router: Router,
  ) {}
  code: string = '';
  
  ngOnInit() {
    // 10.02.31.03:4000
    this.activatedRoute.queryParams.subscribe((params) => {
      this.code = params['code'];
      localStorage.setItem('code', this.code);
      //this.postData(code);
    });
    console.log(this.code);

    const user : AuthModel | any = this.authServ.setUser();
    // if (this.loginServ.getLoginState() === true){
    //   console.log(this.loginServ.getLoginState());
    //   this.router.navigate(['/home']);
    // }
    this.router.navigate(['/login/first']);
    console.log(this.loginServ.getLoginState());
  }

}

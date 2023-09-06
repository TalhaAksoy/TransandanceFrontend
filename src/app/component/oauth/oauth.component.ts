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
  user!:AuthModel ;
  async ngOnInit() {
    // 10.02.31.03:4000
    this.activatedRoute.queryParams.subscribe((params) => {
      this.code = params['code'];
      localStorage.setItem('code', this.code);
    });
    console.log(this.code);


    try {
      const data = await this.authServ.sendToken(this.code).toPromise();
      this.user = data as AuthModel;
    } catch (error) {
      console.error(error);
      this.loginServ.setLoginState(false);
      this.router.navigate(['']);
    }
    console.log("user ...", this.user.user);
    const localData = localStorage.getItem('userData');
    
    if (localData){
      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(this.user));
      this.loginServ.setLoginState(true);
    }else{
      localStorage.setItem('userData', JSON.stringify(this.user));
      this.loginServ.setLoginState(true);
    }
    console.log(this.loginServ.getLoginState())
    if(this.loginServ.getLoginState())
      this.router.navigate(['/login/first']);
  }


}

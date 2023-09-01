import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.scss']
})
export class FirstLoginComponent {

  constructor(private router:Router){}
  twoFAenable : boolean = false;

  onCheckboxChange(){
    this.twoFAenable = !this.twoFAenable;
    console.log(this.twoFAenable);
  }

  redirectHome(){
    //giris islemi dogru yapıldıktan sonra yonlendiricek
    this.router.navigate(['/home']);
  }
}

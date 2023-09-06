import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/env/environment';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.scss']
})
export class FirstLoginComponent {

  constructor(private router:Router , private http: HttpClient){}
  twoFAenable : boolean = false;
  avatarPath!:string;
  userName :string = "";
  str = localStorage.getItem('userData') as string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization:"Bearer " + JSON.parse(this.str).token,
    })
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type':  'image/png',
      Authorization:"Bearer " + JSON.parse(this.str).token,
    })
  };

  ngOnInit(){
    console.log(JSON.parse(this.str));
    this.avatarPath = document.querySelector("#pp")?.getAttribute("src") as string;
  }

  changePhoto(path:string){
    this.avatarPath = path;
    document.querySelector("#pp")?.setAttribute("src", this.avatarPath);
  }
  onCheckboxChange(){
    this.twoFAenable = !this.twoFAenable;
    if (this.twoFAenable){
      console.log("asdasdsa" ,  document.querySelector("#qrImg"));
      this.http.get("http://10.11.31.3:4000/auth/2fa", this.httpOptions2).subscribe(data => {
        document.querySelector("#qrImg")?.setAttribute("src", data.toString());
      },error => {
        console.log("error " , error);
        console.log("asd" , this.httpOptions2)
      })
    }

    console.log(this.twoFAenable);
  }

  updateNickName(event : any) : void{
    this.userName = event.target.value;
    console.log("" , this.userName, "strlen => ", this.userName.length);
  }
  updateUser(){
    if (this.userName.length !== 0){
      console.log("update")
      let json = {login : this.userName, avatar: this.avatarPath, twoFA:this.twoFAenable.toString()}
      this.http.put("http://10.11.31.3:4000/user/update-profile", json, this.httpOptions).subscribe(data => {
          console.log(data);
        }, error => {
          console.log(error);
        });
    }else{
      console.log("isim gir");
    }
  }
}

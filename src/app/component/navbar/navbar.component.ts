import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/darkMode/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor ( private modeState : DarkModeService, private router : Router ){}

  html : HTMLHtmlElement | null = document.querySelector("html");
  modeClick()
  {
    this.modeState.setModeState();
    console.log(this.modeState.getModeState());
    if(this.modeState.getModeState()){
      this.html?.setAttribute("data-theme", "light");
      this.html?.classList.remove("dark");
    }else{
      this.html?.setAttribute("data-theme", "dark");
      this.html?.classList.add("dark");
    }
  }

  redirectProfile(){
    this.router.navigate(["/profile"]);
  }

  redirectSettings(){
    this.router.navigate(["/settings"]);
  }
}

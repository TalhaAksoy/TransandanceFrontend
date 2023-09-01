import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor (private router: Router) {}
  twoFAenable : boolean = false;

  onCheckboxChange(){
    this.twoFAenable = !this.twoFAenable;
    console.log(this.twoFAenable);
  }
}

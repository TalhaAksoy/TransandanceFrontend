import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-loading',
  templateUrl: './game-loading.component.html',
  styleUrls: ['./game-loading.component.scss']
})
export class GameLoadingComponent {
  constructor(private router: Router){}

  returnHome()
  {
    this.router.navigate(["/home"]);
  }
}

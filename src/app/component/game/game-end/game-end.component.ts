import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-end',
  templateUrl: './game-end.component.html',
  styleUrls: ['./game-end.component.scss']
})
export class GameEndComponent {
  constructor(private router: Router) {}

  click()
  {
    this.router.navigate(["/home"]);
  }
}

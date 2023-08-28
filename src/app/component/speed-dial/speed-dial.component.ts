import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss']
})
export class SpeedDialComponent {

  constructor(private router : Router) { }

  redirectHome()
  {
    this.router.navigate(["/home"]);
  }

  redirectChat()
  {
    this.router.navigate(["/chat"]);
  }

  redirectGame()
  {
    this.router.navigate(["/game"]);
  }

  redirectSocial()
  {
    this.router.navigate(["/social"]);
  }
}

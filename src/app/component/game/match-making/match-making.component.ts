import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-making',
  templateUrl: './match-making.component.html',
  styleUrls: ['./match-making.component.scss']
})
export class MatchMakingComponent {

  playersReady : boolean = false;

  constructor(private router: Router){}

  ngOnInit(){
    // if (this.playersReady)
    // {
    //   this.router.navigate(['/game']);
    // }
  }
}

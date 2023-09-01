import { Component, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  
  constructor(private router: Router, private viewContainerRef: ViewContainerRef) {}

  showDiv : boolean  = false;

  toggleDiv(){
    this.showDiv = !this.showDiv;
  }
}

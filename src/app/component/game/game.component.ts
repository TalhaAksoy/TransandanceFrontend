import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  
  constructor(private router: Router, private viewContainerRef: ViewContainerRef) {}

  clickHide(){
    const alertDiv = this.viewContainerRef.element.nativeElement.querySelector('#alert');
    if (alertDiv) {
      alertDiv.remove();
    }
  }

  clickInviteFriend() {
    const alertDiv = document.createElement('div');
    alertDiv.id = 'alert';
    alertDiv.classList.add();
    alertDiv.innerText = 'Friend Add Succesfully :3';
    alertDiv.addEventListener('click', () => this.clickHide());
    this.viewContainerRef.element.nativeElement.appendChild();
  }

  navigateToFriend()
  {
    
  }
}

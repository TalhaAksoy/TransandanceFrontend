import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GameComponent } from '../game.component';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrls: ['./invite-friend.component.scss']
})
export class InviteFriendComponent {
  @Input() showDiv : boolean = false;
  @Output() toggleDiv = new EventEmitter();

  closeDiv(){
    this.toggleDiv.emit(false);
    console.log(this.showDiv);
  }
}

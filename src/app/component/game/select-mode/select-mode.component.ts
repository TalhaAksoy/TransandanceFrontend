import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss']
})
export class SelectModeComponent {
  @Input() showMod : boolean = false;
  @Output() modDiv = new EventEmitter();

  closeDiv(){
    this.modDiv.emit(false);
    console.log(this.showMod);
  }
}

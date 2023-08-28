import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }

  modeState: boolean = false;

  setModeState()
  {
    this.modeState = !this.modeState;
  }

  getModeState(){
    return this.modeState;
  }
}



import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  constructor(private viewContainerRef: ViewContainerRef) {}
  @ViewChild('alert') alert!: ElementRef;

  clickHide(){
    const alertDiv = this.viewContainerRef.element.nativeElement.querySelector('#alert');
    if (alertDiv) {
      alertDiv.remove();
    }
  }

  clickAdd() {
    const alertDiv = document.createElement('div');
    alertDiv.id = 'alert';
    alertDiv.classList.add('w-1/2', 'py-2', 'absolute', 'bottom-20', 'right-5', 'border-2', 'bg-green-500', 'text-black');
    alertDiv.innerText = 'Friend Add Succesfully :3';
    alertDiv.addEventListener('click', () => this.clickHide());
    this.viewContainerRef.element.nativeElement.appendChild(alertDiv);
  }
  
}

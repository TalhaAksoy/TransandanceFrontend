import { Component } from '@angular/core';

@Component({
  selector: 'app-setting-icon',
  templateUrl: './setting-icon.component.html',
  styleUrls: ['./setting-icon.component.scss']
})
export class SettingIconComponent {

  constructor() {}

  images: string[] = [
    "assets/img/darcy.jpeg",
    "assets/img/doge.jpeg",
    "assets/img/giga.jpeg",
    "assets/img/indir.jpeg",
    "assets/img/lziya.jpeg",
    "assets/img/palemdar.jpeg",
    "assets/img/pedro.jpeg",
    "assets/img/rivedik.jpeg",
    "assets/img/sophia.jpeg",
    "assets/img/sortac.jpeg",
    "assets/img/stella.jpeg",
    "assets/img/tommy.jpeg",
    "assets/img/unnamed.png",
    "assets/img/ymorgul.jpeg",
    "assets/img/zeki.jpeg",
  ]

  getImgSrc(event: any)
  {
    const src = event.target.src;
    const startIndex = src.indexOf("assets");
    const relativeSrc = src.substring(startIndex);
    console.log(relativeSrc);
  }

}

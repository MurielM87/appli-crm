import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss',
})
export class UiComponent {
  open = true; //public se met par défaut - open veut dire que le menu est ouvert
  //public open: boolean = true;
  toggle() { //public toggle() : void mais pas nécessaire
    this.open = !this.open;
    //console.log(`Open : ${this.open}`);
  }
}

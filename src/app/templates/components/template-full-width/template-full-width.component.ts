import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrl: './template-full-width.component.scss'
})
export class TemplateFullWidthComponent {
 @Input() title!: string; //! car si pas de titre, alors undefined
 //@Input : la valeur viendra d'ailleurs (n'importe quelle page)
  constructor() {
    console.log('titre constructor ', this.title); //undefined
  }
  ngOnChanges() {
    console.log('titre ngOnChanges ', this.title); //uniquement si element dans @Iput
  }
  ngOnInit() {
    console.log('titre ngOnInit ', this.title); //lors de l'initialisation
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrl: './template-full-width.component.scss'
})
export class TemplateFullWidthComponent {
 @Input() title!: string; //! car si pas de titre, alors undefined
 //@Input : la valeur viendra d'ailleurs (n'importe quelle page)
}

import { Component, Input } from '@angular/core';
import { Order } from '../../../core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrl: './table-light.component.scss'
})
export class TableLightComponent {
  @Input() collection!: Order[];
  @Input() headers!: string[];

  // constructor() {
  //   console.log('constructor()\n=============');
  //   console.log('collections', this.collection);
  //   console.log('header : ', this.headers);
  // }
  ngOnChanges(): void {
    console.log('ngOnChanges()\n=============');
    console.log('collections', this.collection);
    console.log('header : ', this.headers);
  }
  // ngOnInit(): void {
  //   console.log('ngOnInit()\n=============');
  //   console.log('collections', this.collection);
  //   console.log('header : ', this.headers);
  // }
}

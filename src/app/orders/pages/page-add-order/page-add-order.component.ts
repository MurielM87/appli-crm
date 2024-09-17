import { Component } from '@angular/core';
import { Order } from '../../../core/models/order';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrl: './page-add-order.component.scss'
})
export class PageAddOrderComponent {
  item=new Order();
}

import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent {
  title:string = 'Zoxor';
  constructor(private ordersService: OrdersService){
    this.ordersService.collection.subscribe((orders) => {
      console.log('Orders : ', orders);
    })
  }

  // ngOnInit() {
  //   console.log('voici ngOnInit ', this.title); //lors de l'initialisation
  // }
  // ngOnDestroy() {
  //   console.log('bye bye'); //ou alert ou modal ou autre logique avant de quitter la page
  //   //lorsqu'on veut libérer des ressources à la destruction des composants
  // }
}

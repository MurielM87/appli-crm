import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../../core/models/order';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent {
  title:string = 'Orders List';
  headers:string[] = [
    'Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Total TTC', 'State'
  ];
  collection!:Order[]; //une collection qui va stocker un tableau d'objets orders

  constructor(private ordersService: OrdersService){
    this.ordersService.collection.subscribe((orders) => {
      //console.log('Orders : ', orders);
      this.collection = orders;
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

import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../../core/models/order';
import { Observable } from 'rxjs';

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
  collection$!: Observable<Order[]>; //une collection qui va stocker un tableau d'objets orders

  constructor(private ordersService: OrdersService){
    this.collection$ = this.ordersService.collection;
  }

  // ngOnInit() {
  //   console.log('voici ngOnInit ', this.title); //lors de l'initialisation
  // }
  // ngOnDestroy() {
  //   console.log('bye bye'); //ou alert ou modal ou autre logique avant de quitter la page
  //   //lorsqu'on veut libérer des ressources à la destruction des composants
  // }

  //methode pour calculer values
  // public total(val:number, coef:number, tva?:number):number { //angular peut deviner la nature de la valeur à retourner (dont :number pas obligatoire)
  //   if(tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }
  //dans template html
  // <td>{{total(item.tjmHt, item.nbJours)}}</td>
  // <td>{{total(item.tjmHt, item.nbJours, item.tva)}}</td>
}

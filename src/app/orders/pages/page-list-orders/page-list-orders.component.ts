import { Component, inject } from '@angular/core';
import { Order } from '../../../core/models/order';
import { Observable } from 'rxjs';
import { StatusOrder } from '../../../core/enums/status-order.enum';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent {
  title:string = 'Orders List';
  headers:string[] = [
    'Action', 'Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Total TTC', 'State'
  ];
  collection$!: Observable<Order[]>; //une collection qui va stocker un tableau d'objets orders
  status=Object.values(StatusOrder);
  private ordersService: OrdersService = inject(OrdersService);
  private router: Router = inject(Router);

  //ancienne syntaxe
  // constructor(private ordersService: OrdersService){
  //   this.collection$ = this.ordersService.collection;
  // }

  ngOnInit() {
    this.collection$ = this.ordersService.collection;
  }

  changeStatus(item: Order,$event: any) {
    const status = $event.target.value;
    this.ordersService.changeStatus(item, status).subscribe(data => {
      Object.assign(item, data); //Object.assign pour l'objet courant
    });
  }

  deleteOrder(item: Order, $event: any) {
    $event.preventDefault(); // Empêche le comportement par défaut de l'icône

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      imageUrl: 'deleteOrder.jfif', // chemin vers votre image
      imageWidth: 300, // largeur de l'image
      imageHeight: 300, // hauteur de l'image
      imageAlt: 'Custom image', // texte alternatif pour l'image
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown', // Animation d'entrée
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp', // Animation de sortie
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.ordersService.delete(item).subscribe(() => {
          // Rafraîchir la collection après suppression
          this.collection$ = this.ordersService.collection;
          const element = document.getElementById(`order-${item.id}`);
          if (element) {
            element.remove();
          }
        });
      }
    });
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

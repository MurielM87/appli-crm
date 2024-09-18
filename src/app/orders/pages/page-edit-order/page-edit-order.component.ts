import { Component, inject } from '@angular/core';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrl: './page-edit-order.component.scss'
})
export class PageEditOrderComponent {
  item:Order = new Order();
  private ordersService: OrdersService = inject(OrdersService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // Récupérer l'ID de l'URL
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupérer l'id de l'URL

    if (id) {
      // Récupérer la commande depuis l'API
      this.ordersService.getById(id).subscribe((order) => {
        this.item = order; // Injecter les données dans l'objet item
      });
    }
  }


  handleSubmit(item:Order) {
    this.ordersService.update(item).subscribe(() => {
      this.router.navigate(['orders']);
    })
  }
}

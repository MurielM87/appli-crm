import { ClientsService } from './../../services/clients.service';
import { Component, inject } from '@angular/core';
import { Client } from '../../../core/models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrl: './page-add-client.component.scss'
})
export class PageAddClientComponent {
  item = new Client();
  private clientsService: ClientsService = inject(ClientsService);
  private router: Router = inject(Router);

  handleSubmit(item:Client) {
    this.clientsService.add(item).subscribe(() => {
      this.router.navigate(['clients']);
    })
  }
}

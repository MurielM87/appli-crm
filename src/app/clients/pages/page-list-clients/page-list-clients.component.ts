import { Client } from '../../../core/models/client';
import { ClientsService } from './../../services/clients.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss'
})
export class PageListClientsComponent {
  title:string = 'Clients List';
  headers:string[] = [
    'State', 'Name', 'TotalCaHt', 'Tva', 'Comment'
  ];
  collection!:Client[];

  constructor(private clientsService: ClientsService) {
    this.clientsService.collection.subscribe((clients) => {
      //console.log('Clients : ', clients);
      this.collection = clients;
    })
  }
}

import { Component, inject } from '@angular/core';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrl: './page-edit-client.component.scss'
})
export class PageEditClientComponent {
  item:Client = new Client();
  private clientsService: ClientsService = inject(ClientsService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    //Récupérer l'ID de l'URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id) {
      this.clientsService.getById(id).subscribe((client) => {
        this.item = client;
      })
    }
  }

  handleSubmit(item:Client) {
    this.clientsService.update(item).subscribe(() => {
      this.router.navigate(['clients']);
    })
  }
}

import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { Order } from '../../../core/models/order';
import { StatusOrder } from '../../../core/enums/status-order.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../../clients/services/clients.service';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss'
})
export class FormOrderComponent {
  status=Object.values(StatusOrder);
  @Input() init!:Order;
  @Input() clients: Client[] = [];
  @Output() submitted= new EventEmitter<Order>(); //emet un évenement dans une methode
  form!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  private clientsService: ClientsService = inject(ClientsService);

  //constructor(private fb:FormBuilder) {}

  ngOnInit() {
    this.clientsService.getAll().subscribe((clients) => {
      this.clients = clients;
    })
    this.initializeForm(this.init); // Initialisez le formulaire une fois lors de la création du composant
  }
  // Utiliser ngOnChanges pour détecter les changements dans @Input()
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['init'] && changes['init'].currentValue) {
      this.initializeForm(changes['init'].currentValue); // Initialiser le formulaire avec les nouvelles données
    }
  }



  // Méthode pour initialiser le formulaire avec des valeurs
  initializeForm(order: Order) {
    this.form = this.fb.group({
      tjmHt: [order.tjmHt],
      nbJours: [order.nbJours],
      tva: [order.tva],
      state: [order.state],
      client: [
        order.client,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      comment: [order.comment],
      typePresta: [order.typePresta, Validators.required],
      id: [order.id],
    });
  }

  submit() {
    this.submitted.emit(this.form.value);
  }

}

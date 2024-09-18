import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { Order } from '../../../core/models/order';
import { StatusOrder } from '../../../core/enums/status-order.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss'
})
export class FormOrderComponent {
  status=Object.values(StatusOrder);
  @Input() init!:Order;
  @Output() submitted= new EventEmitter<Order>(); //emet un évenement dans une methode
  form!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);

  //constructor(private fb:FormBuilder) {}

  // Utiliser ngOnChanges pour détecter les changements dans @Input()
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['init'] && changes['init'].currentValue) {
      this.initializeForm(changes['init'].currentValue); // Initialiser le formulaire avec les nouvelles données
    }
  }

  ngOnInit() {
    this.initializeForm(this.init); // Initialisez le formulaire une fois lors de la création du composant
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

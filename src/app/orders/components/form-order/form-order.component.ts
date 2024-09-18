import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../../core/models/order';
import { StatusOrder } from '../../../core/enums/status-order.enum';
import { FormBuilder, FormGroup } from '@angular/forms'

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
  constructor(private fb:FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state : [this.init.state],
      client: [this.init.client],
      comment: [this.init.comment],
      typePresta: [this.init.typePresta],
      id: [this.init.id]
    });
  }

  submit() {
    this.submitted.emit(this.form.value);
  }
}

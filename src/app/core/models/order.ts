import { StatusOrder } from "../enums/status-order.enum";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI { //valeur par défaut
  id!:number; //? valeur pas obligatoire //! valeur à l'initialisation undefined - comme ça l'objet n'est pas construit dans un état null
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StatusOrder.OPTION;
  typePresta!:string;
  client!:string;
  comment!:string;
  constructor(obj?:Partial<Order>) {
    if(obj) {
      Object.assign(this, obj); //fusionner les attributs et écrasser les valeurs précédentes avec le nouvel objet -
      //MERGE - Constructor merging the object passed as parameter with the current object.
    }
  }
}

import {StatusOrder} from "../enums/status-order.enum";

export interface OrderI {
  id: number;
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: StatusOrder;
  typePresta: string;
  client: string;
  comment: string;
  //ajout de methodes - methodes d'instance
  totalHT(): number; //car retourne un nombre
  totalTTC(): number;
}

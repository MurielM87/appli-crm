import {StatusClient} from '../enums/status-client.enum';

export interface ClientI {
  state: StatusClient,
  tva: number,
  id: number,
  name: string,
  totalCaHt: number,
  comment: string
}


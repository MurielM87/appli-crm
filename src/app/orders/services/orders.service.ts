
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Order } from '../../core/models/order';

@Injectable({
  providedIn: 'root'
})
export class  OrdersService {
  public collection$!: Observable<Order[]>; //la collection (avec$ car stocke observable) émet une liste d'objets
  private urlApi = environment.urlApi;
  constructor(private http:HttpClient) {
    this.collection$=this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map(data => {
        return data.map(obj => new Order(obj))
      })
    );
  }

  //un getter
  public get collection():Observable<Order[]> {
    return this.collection$;
  }
  //un setter
  public set collection(col:Observable<Order[]>) {
    this.collection$ = col;
  }
}

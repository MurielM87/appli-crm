import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Order } from '../../core/models/order';
import { StatusOrder } from '../../core/enums/status-order.enum';

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

  public changeStatus(item:Order, status:StatusOrder):Observable<Order> {
    const obj = new Order({...item});
    obj.state = status;
    return this.update(obj);
  }

  getById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  public update(item:Order):Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item)
  }

  public add(item:Order):Observable<Order> { //aussi <any> en fonction de l'api ou rien (add(item:Order {return this.http.post(API-URL)}))
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  public delete(item: Order): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/orders/${item.id}`);
  }

}

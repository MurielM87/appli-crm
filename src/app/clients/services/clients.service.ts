import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../core/models/client';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { StatusClient } from '../../core/enums/status-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  public collection$!: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http:HttpClient) {
    this.collection$=this.http.get<Client[]>(`${this.urlApi}/clients`);
   }

   public get collection():Observable<Client[]> {
    return this.collection$;
   }

   public set collection(col:Observable<Client[]>) {
    this.collection$ = col;
   }

   public changeStatus(item:Client, status:StatusClient):Observable<Client> {
    const obj = new Client({...item});
    obj.state = status;
    return this.update(obj);
  }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}/clients/${id}`);
  }

  public update(item:Client):Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }

  public add(item:Client):Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}/clients`, item);
  }

  public delete(item:Client):Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/clients/${item.id}`);
  }

  public getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.urlApi}/clients`);
  }
}

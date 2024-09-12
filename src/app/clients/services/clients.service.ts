import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../core/models/client';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

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
}


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  //un BehaviorSubject
  //numVersion = 1;
  numVersion$ = new BehaviorSubject(1);
  constructor() { }


  incrementVersion() {
    //this.numVersion++;
    //émettre un flux de données
    this.numVersion$.next(this.numVersion$.value + 1);
    console.log("version : ", this.numVersion$);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  numVersion = 1;
  constructor() { }

  incrementVersion() {
    this.numVersion++;
    console.log("version : ", this.numVersion);
  }
}

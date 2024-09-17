import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(val: any, tva?: boolean): number { //val any : n'importe quoi comme valeur
    if(tva) {
      return val.totalTTC();
    }
    return val.totalHT();
  }

}

import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mon CRM v1.0';

  // // //cold and unicast observable
  // // obs$ = new Observable(sub => {
  // //   sub.next(Math.random());
  // // });

  // // constructor(){
  // //   this.obs$.subscribe((data) => {
  // //     console.log('a', data)
  // //   });
  // // }

  // //hot and multicas
  // sub$ = new Subject();
  // constructor() {
  //   //subscribe
  //   this.sub$.subscribe((data) => {
  //     console.log('a1', data);
  //   });
  //   //dans le next emission de flux de données
  //   //sub$ ne retient que la dernière valeur (supprime l'ancienne valeur)
  //   //pour enregistrer de nouveaux subscribe avec next()
  //   this.sub$.next(Math.random());

  //   //subscribe
  //   this.sub$.subscribe((data) => {
  //     console.log('a2', data);
  //   });
  //   //subscribe
  //   this.sub$.subscribe((data) => {
  //     console.log('a3', data);
  //   });
  // }

  //Behaviour Subject - extension du comportement du subject - permet de se rattraper si retard
  //toujours initialiser nouveau subject
  sub$ = new BehaviorSubject(Math.random());
  constructor() {
    //subscribe
    this.sub$.subscribe((data) => {
      console.log('a1', data);
    });
    //subscribe
    this.sub$.subscribe((data) => {
      console.log('a2', data);
    });
    this.sub$.next(Math.random());
    //subscribe
    this.sub$.subscribe((data) => {
      console.log('a3', data);
    });
  }
}

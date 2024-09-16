import { Component } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private versionService: VersionService) {
    //console.log('nav nb : ', this.versionService.numVersion$.value);
  }

  /*public*/ increment() {
    this.versionService.incrementVersion(); //on appelle la methode dans Version Service
  }
}

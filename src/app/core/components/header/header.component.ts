import { VersionService } from './../../services/version.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentVersion!: number;
  // constructor(private versionService:VersionService) {
  //   this.versionService.numVersion.subscribe(() => {
  //   console.log('header nb : ', versionService.numVersion.value); //console.log('nb header: ', this.currentVersion)
  //   this.currentVersion = this.versionService.numVersion.value;
  //   });
  //}

  constructor(private versionService: VersionService) {}

  ngOnInit() {
    this.versionService.numVersion$.subscribe((value) => {
    //  console.log('value', value);
    //  console.log('header nb : ', this.versionService.numVersion$.value);
     //this.currentVersion = this.versionService.numVersion$.value;
     this.currentVersion = value;
    });
  }
}

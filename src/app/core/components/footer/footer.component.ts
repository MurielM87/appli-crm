import { Component } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentVersion!: number;
  // constructor(private versionService: VersionService) {
  //   this.versionService.numVersion.subscribe(() => {
  //     console.log('footer nb : ', versionService.numVersion.value);
  //     this.currentVersion = this.versionService.numVersion.value;
  //     });
  // }

  constructor(private versionService: VersionService) {}
  ngOnInit() {
    this.versionService.numVersion$.subscribe((value) => {
    //  console.log('value', value);
    //  console.log('footer nb : ', this.versionService.numVersion$.value);
     //this.currentVersion = this.versionService.numVersion$.value;
     this.currentVersion = value;
    });
  }
}

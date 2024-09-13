import { Component } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentVersion!: number;
  constructor(private versionService: VersionService) {
    this.currentVersion = this.versionService.numVersion;
    console.log('footer nb : ', this.versionService.numVersion);
  }
}

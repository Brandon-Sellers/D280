import { Component } from '@angular/core';
import { GeoService } from './geo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCountry: any;

  constructor(private geoService: GeoService) { }

  onCountrySelected(name: string) {
    this.geoService.getCountryInfo(name).subscribe(info => {
      this.selectedCountry = info;
    });
  }
}

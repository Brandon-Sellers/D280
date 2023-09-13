import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnChanges {
  @Input() country: string;
  countryInfo: any;

  constructor(private geoService: GeoService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.country && changes.country.currentValue) {
      this.geoService.getCountryInfo(this.country).subscribe(info => {
        this.countryInfo = info;
      });
    }
  }
}

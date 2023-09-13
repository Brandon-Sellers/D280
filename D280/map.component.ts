import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private baseUrl = 'http://api.geonames.org/countryInfoJSON?username=demo';

  constructor(private http: HttpClient) { }

  getCountryInfo(country: string) {
    return this.http.get(`${this.baseUrl}&country=${country}`);
  }
}

const routes: Routes = [
  { path: '', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild('svgMap') svgMap: ElementRef;
  @Output() countrySelected = new EventEmitter<string>();

  ngAfterViewInit() {
    const countries = this.svgMap.nativeElement.querySelectorAll('path');
    countries.forEach(country => {
      country.addEventListener('click', () => {
        this.countrySelected.emit(country.id);
      });
    });
  }
}


getCountryInfoByName(name: string) {
  return this.http.get(`${this.baseUrl}&country=${name}`);
}

selectCountry(name: string) {
  this.getCountryInfoByName(name).subscribe(info => {
    this.selectedCountry = info;
  });
}

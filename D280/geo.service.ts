import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

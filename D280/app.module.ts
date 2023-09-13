import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { AppRoutingModule } from './app-routing.module';
import { GeoService } from './geo.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CountryInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

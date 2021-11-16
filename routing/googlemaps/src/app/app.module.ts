import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent, LocationsComponent, LocationComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey:"AIzaSyCFWW5JzI3JZv-GbajGGZK9xRkeG-vfPtc"}),
    RouterModule.forRoot([
      {path: "locations", component: LocationsComponent},
      {path:"maps/:location", component: LocationComponent},
      {path:"**", component: LocationsComponent}
    ],
    {useHash: true})
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

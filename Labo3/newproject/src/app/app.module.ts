import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Tile1Component } from './tiles/tile1/tile1.component';
import { Tile2Component } from './tiles/tile2/tile2.component';
import { Tile3Component } from './tiles/tile3/tile3.component';
import { Tile4Component } from './tiles/tile4/tile4.component';
import { Tile5Component } from './tiles/tile5/tile5.component';
import { FooterComponent } from './footer/footer.component';
import { TilesComponent } from './tiles/tiles.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    Tile1Component,
    Tile2Component,
    Tile3Component,
    Tile4Component,
    Tile5Component,
    FooterComponent,
    TilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { HostBinding, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddProductToListComponent } from './add-product-to-list/add-product-to-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddProductToListComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"add",component: AddProductToListComponent},
      {path:"summary",component: ShowListComponent},
      {path:"**",redirectTo:"add",pathMatch:"full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

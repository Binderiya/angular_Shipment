import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgClass } from '@angular/common';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ShipmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
       ],
  bootstrap: [AppComponent]
})
export class AppModule { }
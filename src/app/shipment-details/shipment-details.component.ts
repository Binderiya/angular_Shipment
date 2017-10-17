
import { Component, OnInit, Input } from '@angular/core';

import { Shipment } from '../shipment';
import { DataService } from '../data.service';

import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'shipment-detail',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css'],
  providers: [DataService]
})
export class ShipmentDetailsComponent {

  @Input() shipment: Shipment;
}
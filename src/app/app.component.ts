import { Component, OnInit } from '@angular/core';
import { Shipment } from './shipment';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  shipments: Shipment[];
  selectedShipment: Shipment;

  constructor(private dataService: DataService) {}

  getShipments() {
     return this.dataService.getShipments().then(shipments => this.shipments = shipments);
  }

  ngOnInit(): void {
     this.getShipments();
  }

  onSelect(ship: Shipment): void {
    this.selectedShipment = ship;
  }
}

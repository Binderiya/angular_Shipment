import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Shipment } from './shipment';

@Injectable()
export class DataService {

  private shipmentsUrl = 'api/shipment';  // URL to web API

  constructor(private http: Http) { }

  // Get all shipments
  getShipments(): Promise<Shipment[]> {
    return this.http.get(this.shipmentsUrl)
               .toPromise()
               .then(response => response.json() as Shipment[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

export class Shipment {
  constructor(public id: number,
              public pickupDate: Date,
              public deliveryDate: Date,
              public origin: string,
              public destination: string,
              public carrier: string,
              public commodity: string,
              public weight: number) {
  }
}

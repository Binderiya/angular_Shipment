export class Shipment {
  constructor(public id: number,
              public pickupDate: string,
              public deliveryDate: string,
              public origin: string,
              public destination: string,
              public carrier: string,
              public commodity: string,
              public weight: number) {
  }
}

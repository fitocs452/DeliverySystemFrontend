import { Pilot } from './pilot.model';
import { Truck } from './truck.model';

export class Route {
  _id: string;
  initialLocation: string;
  finalLocation: string;
  pilot: Pilot;
  truck: Truck;

  constructor() {}

  toObject() {
    return  {
      initialLocation: this.initialLocation,
      finalLocation: this.finalLocation,
      pilot: this.pilot,
      truck: this.truck
    }
  }
}

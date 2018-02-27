export class Truck {
  _id: string;
  name: string;
  color: string;
  model: number;
  weightCapacity: number;

  constructor() {}

  toObject() {
    return  {
      name: this.name,
      color: this.color,
      model: this.model,
      weightCapacity: this.weightCapacity
    }
  }
}

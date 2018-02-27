export class Package {
  _id: string;
  name: string;
  weight: number;
  dimensions: number;

  constructor() {}

  toObject() {
    return  {
      name: this.name,
      weight: this.weight,
      dimensions: this.dimensions
    }
  }
}

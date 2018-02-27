export class Pilot {
  _id: string;
  name: string;
  lastName: string;
  drivingLicense: string;
  age: number;

  constructor() {}

  toObject() {
    return  {
      name: this.name,
      lastName: this.lastName,
      drivingLicense: this.drivingLicense,
      age: this.age
    }
  }
}

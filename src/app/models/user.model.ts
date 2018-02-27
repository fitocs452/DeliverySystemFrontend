export class User {
  _id: string;
  username: string;
  password: string;
  email: string;

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

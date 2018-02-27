export class User {
  _id: string;
  username: string;
  password: string;
  email: string;

  constructor() {}

  toObject() {
    return  {
      username: this.username,
      password: this.password,
      email: this.email
    }
  }
}

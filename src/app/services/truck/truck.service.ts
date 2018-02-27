import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TruckService {

  private api = 'http://localhost:3000/truck';

  constructor(private http: Http) {}

  list() {
    return this.http.get(this.api);
  }

  create(truckObject) {
    return this.http.post(this.api, truckObject);
  }
}

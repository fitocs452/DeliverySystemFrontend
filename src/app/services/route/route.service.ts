import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RouteService {

  private api = 'http://localhost:3000/route';

  constructor(private http: Http) {}

  list() {
    return this.http.get(this.api);
  }

  create(routeObject) {
    return this.http.post(this.api, routeObject);
  }

}

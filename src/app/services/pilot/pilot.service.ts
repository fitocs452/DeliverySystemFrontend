import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PilotService {

  private api = 'http://localhost:3000/pilot';

  constructor(private http: Http) {}

  list() {
    return this.http.get(this.api);
  }

  create(pilotObject) {
    return this.http.post(this.api, pilotObject);
  }
}

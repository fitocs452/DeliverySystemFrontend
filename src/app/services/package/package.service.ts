import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PackageService {

  private api = 'http://localhost:3000/package';

  constructor(private http: Http) {}

  list() {
    return this.http.get(this.api);
  }

  create(packageObject) {
    return this.http.post(this.api, packageObject);
  }
}

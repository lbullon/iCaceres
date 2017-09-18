import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Environment } from '../../app/environment';
import { Shop } from './shop';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShopsProvider {

  constructor(public http: Http) {
    console.log('Hello BarsProvider Provider');
  }

  getShops(): Observable<Shop[]> {
    return this.http.get(`${Environment.baseUrl}/shop`).map(response => response.json().results as Shop[]);
  }
}

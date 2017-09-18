import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Environment } from '../../app/environment';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestaurantsProvider {

  constructor(public http: Http) {
    console.log('Hello BarsProvider Provider');
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(`${Environment.baseUrl}/restaurant`).map(response => response.json().results as Restaurant[]);
  }
}

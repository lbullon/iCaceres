import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Bar } from './bar';
import { Environment } from '../../app/environment';

@Injectable()
export class BarsProvider {

  constructor(public http: Http) {
    console.log('Hello BarsProvider Provider');
  }

  getBars(): Observable<Bar[]> {
    return this.http.get(`${Environment.baseUrl}/bar/`).map(response => response.json().results as Bar[]);
  }

  saveBar(bar: Bar): Observable<Bar> {
    return this.http.post(`${Environment.baseUrl}/bar/`, bar).map(response => response.json().results as Bar);
  }
}

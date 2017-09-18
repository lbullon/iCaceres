import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Environment } from '../../app/environment';
import { School } from './school';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SchoolsProvider {

  constructor(public http: Http) {
    console.log('Hello BarsProvider Provider');
  }

  getSchools(): Observable<School[]> {
    return this.http.get(`${Environment.baseUrl}/school`).map(response => response.json().results as School[]);
  }
}

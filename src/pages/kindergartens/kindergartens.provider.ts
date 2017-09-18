import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Environment } from '../../app/environment';
import { Kindergarten } from './kindergarten';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KindergartensProvider {

  constructor(public http: Http) {
    console.log('Hello BarsProvider Provider');
  }

  getKindergartens(): Observable<Kindergarten[]> {
    return this.http.get(`${Environment.baseUrl}/kindergarten`).map(response => response.json().results as Kindergarten[])
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Event } from './event';
import { Environment } from '../../app/environment';

@Injectable()
export class EventsProvider {

  constructor(public http: Http) {
    console.log('Hello BarsProvider Provider');
  }

  getEvents(): Observable<Event[]> {
    return this.http.get(`${Environment.baseUrl}/event`).map(response => response.json().results as Event[]);
  }
}

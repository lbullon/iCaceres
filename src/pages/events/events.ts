import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Event } from './event';
import { EventsProvider } from './events.provider';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events: Event[];

  constructor(private eventsProvider: EventsProvider) {
  }

  ionViewDidLoad() {
    this.eventsProvider.getEvents().subscribe(events => this.events = events);
  }
}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { BarsPage } from '../pages/bars/bars';
import { ShopsPage } from '../pages/shops/shops';
import { SchoolsPage } from '../pages/schools/schools';
import { KindergartensPage } from '../pages/kindergartens/kindergartens';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Eventos', component: EventsPage },
      { title: 'Restaurantes', component: RestaurantsPage },
      { title: 'Bares', component: BarsPage },
      { title: 'Tiendas', component: ShopsPage },
      { title: 'Colegios', component: SchoolsPage },
      { title: 'Guarderías', component: KindergartensPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

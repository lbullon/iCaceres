import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestaurantsPageModule } from '../pages/restaurants/restaurants.module';
import { EventsPageModule } from '../pages/events/events.module';
import { ShopsPageModule } from '../pages/shops/shops.module';
import { SchoolsPageModule } from '../pages/schools/schools.module';
import { KindergartensPageModule } from '../pages/kindergartens/kindergartens.module';
import { BarsPageModule } from '../pages/bars/bars.module';
import { HomePageModule } from '../pages/home/home.module';
import { HttpModule } from '@angular/http';
import { NewBarPageModule } from '../pages/new-bar/new-bar.module';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    HttpModule,
    RestaurantsPageModule,
    EventsPageModule,
    ShopsPageModule,
    SchoolsPageModule,
    KindergartensPageModule,
    BarsPageModule,
    NewBarPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule {}

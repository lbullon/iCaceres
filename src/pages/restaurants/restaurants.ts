import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Restaurant } from './restaurant';
import { RestaurantsProvider } from './restaurants.provider';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  restaurants: Restaurant[];

  constructor(private restaurantsProvider: RestaurantsProvider) {
  }

  ionViewDidLoad() {
    this.restaurantsProvider.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}

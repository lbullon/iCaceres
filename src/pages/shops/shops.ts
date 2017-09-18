import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Shop } from './shop';
import { ShopsProvider } from './shops.provider';

/**
 * Generated class for the ShopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shops',
  templateUrl: 'shops.html',
})
export class ShopsPage {

  shops: Shop[];

  constructor(private shopsProvider: ShopsProvider) {
  }

  ionViewDidLoad() {
    this.shopsProvider.getShops().subscribe(shops => this.shops = shops);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Bar } from '../bars/bar';
import { BarsProvider } from '../bars/bars.provider';

/**
 * Generated class for the NewBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-bar',
  templateUrl: 'new-bar.html',
})
export class NewBarPage {

  bar: Bar = {
    name: null,
    description: null,
    type: null,
    address: null,
    openingTime: null,
    closingTime: null
  };

  constructor(public navCtrl: NavController,
              private barsProvider: BarsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewBarPage');
  }

  saveBar() {
    this.barsProvider.saveBar(this.bar)
        .subscribe(() => this.navCtrl.pop());
  }
}

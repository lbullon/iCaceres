import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { School } from './school';
import { SchoolsProvider } from './schools.provider';

/**
 * Generated class for the SchoolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html',
})
export class SchoolsPage {

  schools: School[];

  constructor(private schoolsProvider: SchoolsProvider) {
  }

  ionViewDidLoad() {
    this.schoolsProvider.getSchools().subscribe(schools => this.schools = schools);
  }

}

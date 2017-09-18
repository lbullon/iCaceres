import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewBarPage } from './new-bar';

@NgModule({
  declarations: [
    NewBarPage,
  ],
  imports: [
    IonicPageModule.forChild(NewBarPage),
  ],
})
export class NewBarPageModule {}

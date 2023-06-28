import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntertainmentSinglePageRoutingModule } from './entertainment-single-routing.module';

import { EntertainmentSinglePage } from './entertainment-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntertainmentSinglePageRoutingModule
  ],
  declarations: [EntertainmentSinglePage]
})
export class EntertainmentSinglePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsSinglePageRoutingModule } from './sports-single-routing.module';

import { SportsSinglePage } from './sports-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsSinglePageRoutingModule
  ],
  declarations: [SportsSinglePage]
})
export class SportsSinglePageModule {}

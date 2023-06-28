import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScienceSinglePageRoutingModule } from './science-single-routing.module';

import { ScienceSinglePage } from './science-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScienceSinglePageRoutingModule
  ],
  declarations: [ScienceSinglePage]
})
export class ScienceSinglePageModule {}

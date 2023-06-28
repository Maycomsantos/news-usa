import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnologySinglePageRoutingModule } from './technology-single-routing.module';

import { TechnologySinglePage } from './technology-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnologySinglePageRoutingModule
  ],
  declarations: [TechnologySinglePage]
})
export class TechnologySinglePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessSinglePageRoutingModule } from './business-single-routing.module';

import { BusinessSinglePage } from './business-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessSinglePageRoutingModule
  ],
  declarations: [BusinessSinglePage]
})
export class BusinessSinglePageModule {}

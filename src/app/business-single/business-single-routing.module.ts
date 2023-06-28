import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessSinglePage } from './business-single.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessSinglePageRoutingModule {}

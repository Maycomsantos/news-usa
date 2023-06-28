import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsSinglePage } from './sports-single.page';

const routes: Routes = [
  {
    path: '',
    component: SportsSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsSinglePageRoutingModule {}

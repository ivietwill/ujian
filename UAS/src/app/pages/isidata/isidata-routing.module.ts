import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsidataPage } from './isidata.page';

const routes: Routes = [
  {
    path: '',
    component: IsidataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsidataPageRoutingModule {}

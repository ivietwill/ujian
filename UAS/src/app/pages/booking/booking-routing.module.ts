import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingPage } from './booking.page';

const routes: Routes = [
  {
    path: '',
    component: BookingPage
  },
  {
    path: 'booking',
    loadChildren: () => import('../booking/booking.module').then( m => m.BookingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingPageRoutingModule {}

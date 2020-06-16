import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsidataPageRoutingModule } from './isidata-routing.module';

import { IsidataPage } from './isidata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsidataPageRoutingModule
  ],
  declarations: [IsidataPage]
})
export class IsidataPageModule {}

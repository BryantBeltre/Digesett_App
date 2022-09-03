import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarifarioPageRoutingModule } from './tarifario-routing.module';

import { TarifarioPage } from './tarifario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarifarioPageRoutingModule
  ],
  declarations: [TarifarioPage]
})
export class TarifarioPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicarrutaPageRoutingModule } from './aplicarruta-routing.module';

import { AplicarrutaPage } from './aplicarruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicarrutaPageRoutingModule
  ],
  declarations: [AplicarrutaPage]
})
export class AplicarrutaPageModule {}

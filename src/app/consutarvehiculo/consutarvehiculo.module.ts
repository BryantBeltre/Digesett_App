import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsutarvehiculoPageRoutingModule } from './consutarvehiculo-routing.module';

import { ConsutarvehiculoPage } from './consutarvehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsutarvehiculoPageRoutingModule
  ],
  declarations: [ConsutarvehiculoPage]
})
export class ConsutarvehiculoPageModule {}

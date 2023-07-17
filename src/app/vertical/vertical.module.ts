import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerticalPageRoutingModule } from './vertical-routing.module';

import { VerticalPage } from './vertical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerticalPageRoutingModule
  ],
  declarations: [VerticalPage]
})
export class VerticalPageModule {}

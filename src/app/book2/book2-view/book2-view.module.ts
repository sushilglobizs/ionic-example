import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Book2ViewPageRoutingModule } from './book2-view-routing.module';

import { Book2ViewPage } from './book2-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Book2ViewPageRoutingModule
  ],
  declarations: [Book2ViewPage]
})
export class Book2ViewPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Book2PageRoutingModule } from './book2-routing.module';

import { Book2Page } from './book2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Book2PageRoutingModule
  ],
  declarations: [Book2Page]
})
export class Book2PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBookPageRoutingModule } from './create-book-routing.module';

import { CreateBookPage } from './create-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBookPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateBookPage]
})
export class CreateBookPageModule {}

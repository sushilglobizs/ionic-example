import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostPageRoutingModule } from './add-post-routing.module';

import { AddPostPage } from './add-post.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddPostPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddPostPage]
})
export class AddPostPageModule {}

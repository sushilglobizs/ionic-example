import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Book2ViewPage } from './book2-view.page';

const routes: Routes = [
  {
    path: '',
    component: Book2ViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Book2ViewPageRoutingModule {}

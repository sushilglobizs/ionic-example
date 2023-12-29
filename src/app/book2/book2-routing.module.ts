import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Book2Page } from './book2.page';

const routes: Routes = [
  {
    path: '',
    component: Book2Page
  },
  {
    path: 'create-book',
    loadChildren: () => import('./create-book/create-book.module').then( m => m.CreateBookPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./book2-view/book2-view.module').then( m => m.Book2ViewPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Book2PageRoutingModule {}

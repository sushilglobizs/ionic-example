import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book2Service } from '../book2.service';
import { BookView } from './book-view.model';

@Component({
  selector: 'app-book2-view',
  templateUrl: './book2-view.page.html',
  styleUrls: ['./book2-view.page.scss'],
})
export class Book2ViewPage implements OnInit {

  book!: BookView;

  constructor(
    private route: ActivatedRoute,
    private book2Service: Book2Service,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;

      this.getBook(id);
    });
  }

  getBook(id: number) {
    this.book2Service.getBook(id).subscribe(res => {
      this.book = res;
    });
  }

}

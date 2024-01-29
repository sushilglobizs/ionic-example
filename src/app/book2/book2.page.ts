import { Component, OnInit } from '@angular/core';
import { Book2Service } from './book2.service';
import { Book } from './book2.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-book2',
  templateUrl: './book2.page.html',
  styleUrls: ['./book2.page.scss'],
})
export class Book2Page implements OnInit {

  token!: string;
  bookList!: Book;

  constructor(
    private book2Service: Book2Service,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getToken();
  }

  async getToken() {
    this.token = await this.authService.getToken();
  }

  ionViewWillEnter() {
    this.getBooksList();
  }

  getBooksList() {
    this.book2Service.getBooks(this.token).subscribe(res => {
      this.bookList = res;
    });
  }

  viewBook(id: number) {
    this.router.navigateByUrl('/tabs/book2/' + id);
  }

}

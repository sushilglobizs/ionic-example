import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book2.model';
import { BookView } from './book2-view/book-view.model';

@Injectable({
  providedIn: 'root'
})
export class Book2Service {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBooks(): Observable<Book> {
    return this.httpClient.get<Book>('https://dailystandup.globizs.com/api/books');
  }

  getBook(id: number): Observable<BookView> {
    return this.httpClient.get<BookView>('https://dailystandup.globizs.com/api/books/' + id);
  }

  createBook(data: BookView): Observable<BookView> {
    return this.httpClient.post<BookView>('https://dailystandup.globizs.com/api/books', data);
  }

  updateBook() {

  }

  deleteBook(id: number) {

  }
}

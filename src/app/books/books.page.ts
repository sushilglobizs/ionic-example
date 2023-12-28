import { Component, OnInit } from '@angular/core';
import { CollectionReference, Firestore, addDoc, collectionData } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Book } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  bookCollectionReference!: CollectionReference;
  bookList!: any[];

  constructor(
    private firestore: Firestore
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookCollectionReference = collection(this.firestore, 'book-list');

    collectionData(this.bookCollectionReference).subscribe(data => {
      this.bookList = data;
    });
  }

  addBook() {
    addDoc(this.bookCollectionReference, {bookd_id: 5, title: 'You Can Win', author: 'Shiv Khera'});
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.org/posts');
  }


}

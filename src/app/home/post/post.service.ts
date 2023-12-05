import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../home.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPost(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`https://jsonplaceholder.org/posts/${id}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL = 'https://jsonplaceholder.typicode.com/posts';
  private TOKEN: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IKpXVCJ9`;

  constructor(private httpClient: HttpClient) { }
  getPosts() {
    return this.httpClient.get(this.API_URL);
  }

  savePost() {
    return this.httpClient.post(this.API_URL, {
      headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-type': `application/json`
      }
    })
  }

  updatePost() {
    return this.httpClient.put(`${this.API_URL}/1`,  {
      headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-type': `application/json`
      }
    })
  }
  deletePost() {
    return this.httpClient.delete(`${this.API_URL}/1`, {
      headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-type': `application/json`
      }
    })
  }
}

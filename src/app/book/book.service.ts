import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}
  public getAllBookService() {
    return this.httpClient.get('http://localhost:8080/book/');
  }
  public createBookService(book) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/book/',
      JSON.stringify(book),
      {
        headers: headers,
      }
    );
  }
}
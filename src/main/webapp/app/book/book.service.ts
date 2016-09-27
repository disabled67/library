import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import {Observable} from  'rxjs/Observable'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Book } from './book';

@Injectable()
export class BookService {

  private Server = {
    BaseUrl: 'book',
    GetAllBooks: 'book/all',
    NewUrl: 'book/new',
  };

  constructor(private http: Http) { }

  getBooks(): Observable<Book[]> {
    return this.http
      .get(this.Server.GetAllBooks)
      .map(response => response.json() as Book[])
      .catch(this.handleError);
  }

  getBook(id: number): Observable<Book> {
    return this.getBooks()
      .map(books => books.find(book => book.id === id));
  }

  save(book: Book): Observable<Book> {
    if (book.id) {
      return this.put(book);
    }
    return this.post(book);
  }

  delete(book: Book): Observable<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.Server.BaseUrl}/${book.id}`;

    return this.http
      .delete(url, { headers: headers })
      .catch(this.handleError);
  }

  // Add new Book
  private post(book: Book): Observable<Book> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(this.Server.NewUrl, JSON.stringify(book), { headers: headers })
      .catch(this.handleError);
  }

  // Update existing Book
  private put(book: Book): Observable<Book> {
    let url = `${this.Server.BaseUrl}/${book.id}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .put(url, JSON.stringify(book), {headers: headers})
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
}

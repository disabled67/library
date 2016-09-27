import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../book/book';
import { BookService } from '../book/book.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private router: Router,
    private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  gotoDetail(book: Book): void {
    let link = ['/book', book.id];
    this.router.navigate(link);
  }
}

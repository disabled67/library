import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
  moduleId: module.id,
  selector: 'my-books',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})

export class BookComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
  addingBook = false;
  error: any;

  constructor(
    private router: Router,
    private bookService: BookService) { }

  getBooks(): void {
    this.bookService
      .getBooks()
      .subscribe(books => this.books = books);
  }

  addBook(): void {
    this.addingBook = true;
    this.selectedBook = null;
  }

  close(savedBook: Book): void {
    this.addingBook = false;
    if (savedBook) { this.getBooks(); }
  }

  deleteBook(book: Book, event: any): void {
    event.stopPropagation();
    this.bookService
      .delete(book)
      .subscribe(res => {
        this.books = this.books.filter(h => h !== book);
        if (this.selectedBook === book) { this.selectedBook = null; }
      });
  }

  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.addingBook = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/edit', this.selectedBook.id]);
  }
}

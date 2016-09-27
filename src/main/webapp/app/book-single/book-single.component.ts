import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Book } from '../book/book';
import { BookService } from '../book/book.service';

@Component({
  moduleId: module.id,
  selector: 'book-single',
  templateUrl: 'book-single.component.html',
  styleUrls: ['book-single.component.css']
})

export class BookSingleComponent implements OnInit {
  @Input() book: Book;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.bookService.getBook(id)
          .subscribe(book => this.book = book);
      } else {
        this.navigated = false;
        this.book = new Book();
      }
    });
  }

  goBack(savedBook: Book = null): void {
    this.close.emit(savedBook);
    if (this.navigated) { window.history.back(); }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';
import 'rxjs/add/operator/catch';

@Component({
  moduleId: module.id,
  selector: 'book-edit',
  templateUrl: 'book-edit.component.html',
  styleUrls: ['book-edit.component.css']
})

export class BookEditComponent implements OnInit {
  @Input() book: Book;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private bookService: BookService,
    private location: Location,
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

  save(): void {
    this.bookService
      .save(this.book)
      .subscribe(book => {
        this.book = book; // saved book, w/ id if new
        this.goBack(book);
      })
  }

  goBack(savedBook: Book = null): void {
    this.close.emit(savedBook);
    if (this.navigated) { window.history.back(); }
  }
}

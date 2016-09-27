"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var book_service_1 = require('./book.service');
var BookComponent = (function () {
    function BookComponent(router, bookService) {
        this.router = router;
        this.bookService = bookService;
        this.addingBook = false;
    }
    BookComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService
            .getBooks()
            .subscribe(function (books) { return _this.books = books; });
    };
    BookComponent.prototype.addBook = function () {
        this.addingBook = true;
        this.selectedBook = null;
    };
    BookComponent.prototype.close = function (savedBook) {
        this.addingBook = false;
        if (savedBook) {
            this.getBooks();
        }
    };
    BookComponent.prototype.deleteBook = function (book, event) {
        var _this = this;
        event.stopPropagation();
        this.bookService
            .delete(book)
            .subscribe(function (res) {
            _this.books = _this.books.filter(function (h) { return h !== book; });
            if (_this.selectedBook === book) {
                _this.selectedBook = null;
            }
        });
    };
    BookComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BookComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        this.addingBook = false;
    };
    BookComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/edit', this.selectedBook.id]);
    };
    BookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-books',
            templateUrl: 'book.component.html',
            styleUrls: ['book.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, book_service_1.BookService])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map
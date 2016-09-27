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
var common_1 = require('@angular/common');
var book_1 = require('../book/book');
var book_service_1 = require('../book/book.service');
require('rxjs/add/operator/catch');
var BookEditComponent = (function () {
    function BookEditComponent(bookService, location, route) {
        this.bookService = bookService;
        this.location = location;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    BookEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.bookService.getBook(id)
                    .subscribe(function (book) { return _this.book = book; });
            }
            else {
                _this.navigated = false;
                _this.book = new book_1.Book();
            }
        });
    };
    BookEditComponent.prototype.save = function () {
        var _this = this;
        this.bookService
            .save(this.book)
            .subscribe(function (book) {
            _this.book = book; // saved book, w/ id if new
            _this.goBack(book);
        });
    };
    BookEditComponent.prototype.goBack = function (savedBook) {
        if (savedBook === void 0) { savedBook = null; }
        this.close.emit(savedBook);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', book_1.Book)
    ], BookEditComponent.prototype, "book", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BookEditComponent.prototype, "close", void 0);
    BookEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'book-edit',
            templateUrl: 'book-edit.component.html',
            styleUrls: ['book-edit.component.css']
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService, common_1.Location, router_1.ActivatedRoute])
    ], BookEditComponent);
    return BookEditComponent;
}());
exports.BookEditComponent = BookEditComponent;
//# sourceMappingURL=book-edit.component.js.map
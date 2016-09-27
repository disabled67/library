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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var login_service_1 = require("../login/login.service");
var BookService = (function () {
    function BookService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.Server = {
            BaseUrl: 'book',
            GetAllBooks: 'book/all',
            NewUrl: 'book/new',
        };
    }
    BookService.prototype.getBooks = function () {
        console.log(this.loginService.isSignedIn());
        return this.http
            .get(this.Server.GetAllBooks)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.getBook = function (id) {
        return this.getBooks()
            .map(function (books) { return books.find(function (book) { return book.id === id; }); });
    };
    BookService.prototype.save = function (book) {
        if (book.id) {
            return this.put(book);
        }
        return this.post(book);
    };
    BookService.prototype.delete = function (book) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.Server.BaseUrl + "/" + book.id;
        return this.http
            .delete(url, { headers: headers })
            .catch(this.handleError);
    };
    // Add new Book
    BookService.prototype.post = function (book) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.Server.NewUrl, JSON.stringify(book), { headers: headers })
            .catch(this.handleError);
    };
    // Update existing Book
    BookService.prototype.put = function (book) {
        var url = this.Server.BaseUrl + "/" + book.id;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(url, JSON.stringify(book), { headers: headers })
            .catch(this.handleError);
    };
    BookService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Observable_1.Observable.throw(error.message || error);
    };
    BookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, login_service_1.LoginService])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map
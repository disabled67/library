"use strict";
var router_1 = require('@angular/router');
var book_list__component_1 = require('../book-list/book-list..component');
var book_component_1 = require('../book/book.component');
var book_edit_component_1 = require('../book-edit/book-edit.component');
var book_single_component_1 = require('../book-single/book-single.component');
var login_component_1 = require("../login/login.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/loginForm',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: book_list__component_1.BookListComponent
    },
    {
        path: 'edit/:id',
        component: book_edit_component_1.BookEditComponent
    },
    {
        path: 'book/:id',
        component: book_single_component_1.BookSingleComponent
    },
    {
        path: 'admin',
        component: book_component_1.BookComponent
    },
    {
        path: 'loginForm',
        component: login_component_1.LoginComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [book_list__component_1.BookListComponent, book_component_1.BookComponent, book_edit_component_1.BookEditComponent, book_single_component_1.BookSingleComponent, login_component_1.LoginComponent];
//# sourceMappingURL=app.routing.js.map
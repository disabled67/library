import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from '../book-list/book-list..component';
import { BookComponent } from '../book/book.component';
import { BookEditComponent } from '../book-edit/book-edit.component';
import { BookSingleComponent } from '../book-single/book-single.component';
import {LoginComponent} from "../login/login.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/loginForm',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: BookListComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'book/:id',
    component: BookSingleComponent
  },
  {
    path: 'admin',
    component: BookComponent
  },
  {
    path: 'loginForm',
    component: LoginComponent
  }

];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [BookListComponent, BookComponent, BookEditComponent, BookSingleComponent, LoginComponent];

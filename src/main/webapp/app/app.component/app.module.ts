import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api


import '../rxjs-extensions';
import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';
import { BookService } from '../book/book.service';
import { BookSearchComponent } from '../book-search/book-search.component';
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../login/login.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    BookSearchComponent,
    routedComponents,
    LoginComponent
  ],
  providers: [
    BookService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

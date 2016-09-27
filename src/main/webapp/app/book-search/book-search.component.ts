import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';

import {BookSearchService} from './book-search.service';
import {Book} from '../book/book';

@Component({
    moduleId: module.id,
    selector: 'book-search',
    templateUrl: 'book-search.component.html',
    styleUrls: ['book-search.component.css'],
    providers: [BookSearchService]
})

export class BookSearchComponent implements OnInit {
    books: Observable<Book[]>;
    private searchTerms = new Subject<string>();

    constructor(private bookSearchService: BookSearchService,
                private router: Router) {
    }

    search(term: string): void {
        // Push a search term into the observable stream.
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.books = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.bookSearchService.search(term)
                // or the observable of empty books if no search term
                : Observable.of<Book[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Book[]>([]);
            });
    }

    gotoDetail(book: Book): void {
        let link = ['/book', book.id];
        this.router.navigate(link);
    }
}

package app.controllers;

import app.dtos.BookDto;
import app.services.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "book")
public class BookController  {

    @Autowired
    private IBookService bookService;

    @RequestMapping(value = "/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<BookDto> findAllBook(Pageable pageable) {
        return bookService.findAll(pageable);
    }

    @RequestMapping(value = "/new", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void createBook(@RequestBody BookDto bookDto) {
        bookService.saveBook(bookDto);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public BookDto findById (@PathVariable Long id) {
        return bookService.findById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public void updateBook(@RequestBody BookDto bookDto) {
        bookService.updateBook(bookDto);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }

    @RequestMapping(value = "/find/{title}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<BookDto> findBook(@PathVariable String title, Pageable pageable) {
        return bookService.findByTitle(pageable, title);
    }


}

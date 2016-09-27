package app.services.impl;

import app.dtos.BookDto;
import app.entities.Book;
import app.repositories.BookRepository;
import app.services.IBookService;
import ma.glasnost.orika.MapperFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BookService implements IBookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    protected MapperFacade mapper;

    @Override
    public List<BookDto> findAll(Pageable pageable) {
        Page<Book> books = bookRepository.findAll(pageable);
        return mapper.mapAsList(books, BookDto.class);
    }

    @Override
    public List<BookDto> findByTitle(Pageable pageable, String title) {
        Page<Book> books = bookRepository.findByTitle(pageable, title);
        return mapper.mapAsList(books, BookDto.class);
    }

    @Override
    public void saveBook(BookDto bookDto) {
        bookRepository.save (mapper.map(bookDto, Book.class));
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.delete(id);
    }

    @Override
    public BookDto findById(Long id) {
        return mapper.map(bookRepository.findById(id), BookDto.class);
    }

    @Override
    public void updateBook(BookDto bookDto) {
        bookRepository.save(mapper.map(bookDto, Book.class));
    }


}

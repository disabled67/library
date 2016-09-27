package app.services;

import app.dtos.BookDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBookService {

    public List<BookDto> findAll(Pageable pageable);
    public List<BookDto> findByTitle(Pageable pageable, String title);
    public BookDto findById (Long id);
    public void updateBook(BookDto bookDto);
    public void saveBook(BookDto bookDto);
    public void deleteBook(Long id);

}

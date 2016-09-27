package app.repositories;

import app.entities.Book;
import app.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.awt.*;


public interface BookRepository extends CrudRepository<Book, Long> {

    Page<Book> findAll(Pageable pageable);
    Page<Book> findByTitle (Pageable pageable, String title);
    Book findById (Long id);

}
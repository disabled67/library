package app.mappers;

import app.dtos.BookDto;
import app.entities.Book;
import ma.glasnost.orika.CustomMapper;
import ma.glasnost.orika.MappingContext;
import org.springframework.stereotype.Component;


@Component
public class BookMapper extends CustomMapper<Book, BookDto> {

	@Override
	public void mapAtoB(Book book, BookDto dto, MappingContext context) {
		dto.id = book.getId();
		dto.title = book.getTitle();
		dto.description = book.getDescription();
		dto.text = book.getText();
	}


}

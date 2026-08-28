import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookDto } from './book.dto';
import { Book } from './book.model';

export function mapBookDtoToModel(dto: BookDto): Book {
  return {
    id: dto.id,
    isbn: dto.isbn,
    title: dto.title,
    author: dto.author,
    categoryId: dto.categoryId,
    isAvailable: dto.isAvailable,
    totalCopies: dto.totalCopies,
    availableCopies: dto.availableCopies,
    bookPhotoUrl: dto.bookPhotoUrl,
    publisherName: dto.publisherName,
    publishDate: dto.publishDate ? new Date(dto.publishDate) : null
  };
}

export function mapBooks(): OperatorFunction<BookDto[], Book[]> {
  return map((dtos: BookDto[]) => dtos.map(mapBookDtoToModel));
}

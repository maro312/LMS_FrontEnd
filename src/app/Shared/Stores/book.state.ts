import { Book } from '../Models/Books/book.model';

export interface BookState {
  books: Book[];
  selectedBook: Book | null;
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export const initialBookState: BookState = {
  books: [],
  selectedBook: null,
  isLoading: false,
  error: null,
  currentPage: 1,
  pageSize: 12,
  totalItems: 0,
  totalPages: 0,
};

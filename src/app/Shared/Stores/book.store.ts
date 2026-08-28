import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { initialBookState } from './book.state';
import { Book } from '../Models/Books/book.model';
import { BookService } from '../Services/book.service';
import { lastValueFrom } from 'rxjs';
export const BookStore = signalStore(
  { providedIn: 'root' },
  withState(initialBookState),
  withMethods((store, bookService = inject(BookService)) => ({
    setBooks(books: Book[]) {
      patchState(store, { books });
    },
    addBook(book: Book) {
      patchState(store, (state) => ({ books: [...state.books, book] }));
    },
    setLoading(isLoading: boolean) {
      patchState(store, { isLoading });
    },
    setError(error: string | null) {
      patchState(store, { error });
    },
    async loadBooks() {
      patchState(store, { isLoading: true, error: null });
      try {
        const response = await lastValueFrom(bookService.getBooks());
        if (response.isSuccess && response.value) {
          // Assuming BookDto is compatible with the Book model
          patchState(store, { books: response.value as unknown as Book[], isLoading: false });
        } else {
          patchState(store, { isLoading: false, error: response.errors?.[0] || 'Failed to load books' });
        }
      } catch (err: any) {
        patchState(store, { isLoading: false, error: err.message || 'An error occurred while loading books' });
      }
    },
    async loadBooksPaginated(page: number) {
      patchState(store, { isLoading: true, error: null, currentPage: page });
      try {
        const response = await lastValueFrom(bookService.getBooksPaginated(page, store.pageSize()));
        if (response.isSuccess && response.value) {
          patchState(store, {
            books: response.value.items as unknown as Book[],
            totalItems: response.value.totalCount,
            totalPages: response.value.totalPages,
            isLoading: false
          });
        } else {
          patchState(store, { isLoading: false, error: response.errors?.[0] || 'Failed to load books' });
        }
      } catch (err: any) {
        patchState(store, { isLoading: false, error: err.message || 'An error occurred while loading books' });
      }
    },
    async loadBookById(id: string) {
      patchState(store, { isLoading: true, error: null, selectedBook: null });
      try {
        const response = await lastValueFrom(bookService.getBookById(id));
        if (response.isSuccess && response.value) {
          patchState(store, { selectedBook: response.value as unknown as Book, isLoading: false });
        } else {
          patchState(store, { isLoading: false, error: response.errors?.[0] || 'Failed to load book' });
        }
      } catch (err: any) {
        patchState(store, { isLoading: false, error: err.message || 'An error occurred while loading book' });
      }
    }
  }))
);

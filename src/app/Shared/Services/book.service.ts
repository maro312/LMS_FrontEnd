import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BookDto } from '../Models/Books/book.dto';
import { ApiResult, ApiListResult, PagedResult } from '../Models/api-result.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7071/api/Book';

  getBooks(): Observable<ApiListResult<BookDto>> {
    return this.http.get<ApiListResult<BookDto>>(this.apiUrl);
  }

  getBooksPaginated(pageNumber: number = 1, pageSize: number = 12): Observable<ApiResult<PagedResult<BookDto>>> {
    return this.http.get<ApiResult<PagedResult<BookDto>>>(`${this.apiUrl}/paginated?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getBookById(id: string): Observable<ApiResult<BookDto>> {
    return this.http.get<ApiResult<BookDto>>(`${this.apiUrl}/${id}`);
  }

  createBook(bookData: FormData): Observable<ApiResult<BookDto>> {
    return this.http.post<ApiResult<BookDto>>(this.apiUrl, bookData);
  }

  updateBook(id: string, bookData: FormData): Observable<ApiResult<BookDto>> {
    return this.http.put<ApiResult<BookDto>>(`${this.apiUrl}/${id}`, bookData);
  }

  deleteBook(id: string): Observable<ApiResult<BookDto>> {
    return this.http.delete<ApiResult<BookDto>>(`${this.apiUrl}/${id}`);
  }
}

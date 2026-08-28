import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BookStore } from '../../../../Shared/Stores/book.store';

@Component({
  selector: 'app-book-info',
  imports: [DatePipe],
  templateUrl: './book-info.html',
  styleUrl: './book-info.scss',
})
export class BookInfo {
  readonly store = inject(BookStore);
}

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookCover } from '../../Components/book-cover/book-cover';
import { BookInfo } from '../../Components/book-info/book-info';
import { BorrowForm } from '../../Components/borrow-form/borrow-form';
import { BookStore } from '../../../../Shared/Stores/book.store';

@Component({
  selector: 'app-book-details',
  imports: [BookCover, BookInfo, BorrowForm],
  templateUrl: './book-details.page.html',
  styleUrl: './book-details.page.scss',
})
export class BookDetailsPage implements OnInit {
  private route = inject(ActivatedRoute);
  readonly store = inject(BookStore);

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.store.loadBookById(bookId);
    }
  }
}

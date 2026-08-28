import { Component, inject, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookStore } from '../../../../Shared/Stores/book.store';

@Component({
  selector: 'app-borrow-form',
  imports: [DatePipe, FormsModule],
  templateUrl: './borrow-form.html',
  styleUrl: './borrow-form.scss',
})
export class BorrowForm {
  readonly store = inject(BookStore);
  
  selectedPeriod = signal<number>(7);
  pickupDate = signal<Date>(new Date());
  
  returnDate = computed(() => {
    const d = new Date(this.pickupDate());
    d.setDate(d.getDate() + Number(this.selectedPeriod()));
    return d;
  });
}

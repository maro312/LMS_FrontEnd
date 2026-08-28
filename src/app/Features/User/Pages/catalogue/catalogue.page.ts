import { Component, inject, OnInit } from '@angular/core';
import { CatalogueSearchAndCategoriesComponent } from '../../Components/catalogue-search-and-categories/catalogue-search-and-categories.component';
import { CatalogueFilterComponent } from '../../Components/catalogue-filter/catalogue-filter.component';
import { BookCardComponent } from '../../../../Shared/User/components/book-card/book-card.component';
import { BookStore } from '../../../../Shared/Stores/book.store';
import { PaginationComponent } from '../../../../Shared/User/components/pagination/pagination.component';
@Component({
  selector: 'app-catalogue',
  imports: [CatalogueSearchAndCategoriesComponent, CatalogueFilterComponent, BookCardComponent, PaginationComponent],
  templateUrl: './catalogue.page.html',
  styleUrl: './catalogue.page.scss',
})
export class CataloguePage implements OnInit {
  readonly store = inject(BookStore);

  ngOnInit() {
    this.store.loadBooksPaginated(this.store.currentPage());
  }

  onPageChange(page: number) {
    this.store.loadBooksPaginated(page);
  }
}

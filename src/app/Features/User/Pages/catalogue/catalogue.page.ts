import { Component } from '@angular/core';
import { CatalogueSearchAndCategoriesComponent } from '../../Components/catalogue-search-and-categories/catalogue-search-and-categories.component';
import { CatalogueFilterComponent } from '../../Components/catalogue-filter/catalogue-filter.component';

@Component({
  selector: 'app-catalogue',
  imports: [CatalogueSearchAndCategoriesComponent, CatalogueFilterComponent],
  templateUrl: './catalogue.page.html',
  styleUrl: './catalogue.page.scss',
})
export class CataloguePage {}

import { Component } from '@angular/core';
import { CatalogueSearchAndCategoriesComponent } from '../../Components/catalogue-search-and-categories/catalogue-search-and-categories.component';

@Component({
  selector: 'app-catalogue',
  imports: [CatalogueSearchAndCategoriesComponent],
  templateUrl: './catalogue.page.html',
  styleUrl: './catalogue.page.scss',
})
export class CataloguePage {}

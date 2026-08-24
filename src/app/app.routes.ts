import { Routes } from '@angular/router';
import { HomePage } from './Features/User/Pages/home/home.page';
import { CataloguePage } from './Features/User/Pages/catalogue/catalogue.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'catalogue', component: CataloguePage },
  { path: '**', redirectTo: '' }
];

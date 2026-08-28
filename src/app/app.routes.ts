import { Routes } from '@angular/router';
import { HomePage } from './Features/User/Pages/home/home.page';
import { CataloguePage } from './Features/User/Pages/catalogue/catalogue.page';
import { AuthPage } from './Features/User/Pages/auth-page/auth.page';
import { authGuard } from './Shared/Guards/auth.guard';
import { BookDetailsPage } from './Features/User/Pages/book-details/book-details.page';

export const routes: Routes = [
  { path: 'auth', component: AuthPage },
  { path: '', component: HomePage, canActivate: [authGuard] },
  { path: 'catalogue', component: CataloguePage, canActivate: [authGuard] },
  { path: 'book-details/:id', component: BookDetailsPage },
  { path: '**', redirectTo: '' }
];

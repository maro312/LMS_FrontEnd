import { Component, inject } from '@angular/core';
import { BookStore } from '../../../../Shared/Stores/book.store';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-book-cover',
  imports: [],
  templateUrl: './book-cover.html',
  styleUrl: './book-cover.scss',
})
export class BookCover {
  readonly store = inject(BookStore);
  imageError: boolean = false;

  getPhotoUrl(photoUrl: string | undefined): string {
    if (!photoUrl || photoUrl === 'string') {
      return '';
    }
    if (photoUrl.startsWith('http')) return photoUrl;
    
    const baseUrl = (environment as any).backendUrl 
      ? (environment as any).backendUrl.endsWith('/') 
        ? (environment as any).backendUrl.slice(0, -1) 
        : (environment as any).backendUrl
      : environment.apiUrl.endsWith('/') 
        ? environment.apiUrl.slice(0, -1) 
        : environment.apiUrl;
      
    const path = photoUrl.startsWith('/') ? photoUrl : `/${photoUrl}`;
    return `${baseUrl}${path}`;
  }
}

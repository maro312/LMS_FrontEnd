import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../../Models/Books/book.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-book-card',
  imports: [RouterLink],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input({ required: true }) book!: Book;

  getAvailabilityClass(): string {
    return this.book.isAvailable
      ? 'text-primary bg-primary-container/20'
      : 'text-outline bg-surface-variant';
  }

  getAvailabilityDotClass(): string {
    return this.book.isAvailable ? 'bg-primary' : 'bg-outline';
  }

  imageError: boolean = false;

  getPhotoUrl(): string {
    console.log('Original book photo URL:', this.book.bookPhotoUrl);
    if (!this.book.bookPhotoUrl || this.book.bookPhotoUrl === 'string') {
      return ''; // returning empty string will trigger the (error) event on the img tag
    }
    if (this.book.bookPhotoUrl.startsWith('http')) return this.book.bookPhotoUrl;
    
    // Use environment backendUrl to prefix relative paths
    // Remove trailing slash from backendUrl if present to avoid double slashes
    const baseUrl = (environment as any).backendUrl 
      ? (environment as any).backendUrl.endsWith('/') 
        ? (environment as any).backendUrl.slice(0, -1) 
        : (environment as any).backendUrl
      : environment.apiUrl.endsWith('/') 
        ? environment.apiUrl.slice(0, -1) 
        : environment.apiUrl;
      
    // Ensure bookPhotoUrl starts with a slash
    const path = this.book.bookPhotoUrl.startsWith('/') 
      ? this.book.bookPhotoUrl 
      : `/${this.book.bookPhotoUrl}`;
      
    const finalUrl = `${baseUrl}${path}`;
    console.log('Final constructed photo URL:', finalUrl);
    return finalUrl;
  }
}

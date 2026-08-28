export interface Book {
  id: string;
  isbn: string;
  title: string;
  author: string;
  categoryId: string;
  isAvailable: boolean;
  totalCopies: number;
  availableCopies: number;
  bookPhotoUrl: string;
  publisherName: string;
  publishDate: Date | null;
}
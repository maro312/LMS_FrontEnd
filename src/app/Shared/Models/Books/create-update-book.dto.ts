export interface CreateUpdateBookDto {
  isbn?: string;
  title: string;
  author: string;
  categoryId?: string;
  isAvailable: boolean;
  totalCopies: number;
  availableCopies: number;
  bookPhotoFile?: File | null;
  publisherName?: string;
  publishDate?: string;
}

export interface BookDto {
  id: string;
  createdBy: string;
  modifiedBy: string;
  createdDate: string;
  updatedDate: string;
  isbn: string;
  title: string;
  author: string;
  categoryId: string;
  isAvailable: boolean;
  totalCopies: number;
  availableCopies: number;
  bookPhotoUrl: string;
  publisherName: string;
  publishDate: string;
}

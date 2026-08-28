export interface ApiResult<T> {
  value: T;
  status: number;
  isSuccess: boolean;
  successMessage: string | null;
  correlationId: string | null;
  errorCode: string | null;
  code: string | null;
  errors: string[] | null;
  validationErrors: { field: string; message: string }[] | null;
}

export interface ApiListResult<T> {
  value: T[] | null;
  status: number;
  isSuccess: boolean;
  successMessage: string | null;
  correlationId: string | null;
  errorCode: string | null;
  code: string | null;
  errors: string[] | null;
  validationErrors: { field: string; message: string }[] | null;
}

export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

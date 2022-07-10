declare namespace Pokemon {
  type SuccessApiResponse<T> = {
    count: number;
    next: string;
    previous: string | null;
    results: T;
  };

  type PaginationParam = {
    limit: number;
    offset: number;
  };

  type List = {
    name: string;
    url: string;
  };
}

export interface ItemBook {
  title: string;
  author: string;
  year: string;
  genre: string;
  status: string;
  isAvailableToBorrow: boolean;
  subject: Array<string>;
}

export interface BookState {
  list: Array<BookState>;
  selectedBook: BookState | null;
}

export const initialBookState: BookState = {
  list: [],
  selectedBook: null,
};

export const transformBookLis = () => {};

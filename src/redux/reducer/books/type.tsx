export interface ItemBook {
  title: string;
  author: Array<any>;
  year: string;
  genre: string;
  status: string;
  isAvailableToBorrow: boolean;
  subject: Array<string>;
  cover: string;
}

export interface GroupList {
  genre: string;
  list: Array<ItemBook>;
}

export interface BookState {
  list: Array<ItemBook>;
  groupList: Array<GroupList>;
  selectedBook: ItemBook | null;
  isLoading: boolean;
}

export const initialBookState: BookState = {
  list: [],
  groupList: [],
  selectedBook: null,
  isLoading: false,
};

export const transformBookList = (data: Array<any>, subject: string) => {
  return data.map(item => {
    return {
      title: item?.title,
      author: item?.authors,
      year: item?.first_publish_year,
      genre: subject,
      status: item?.availability?.status,
      isAvailableToBorrow: item?.availability?.available_to_borrow,
      cover: `https://covers.openlibrary.org/b/id/${item?.cover_id}-M.jpg`,
    };
  });
};

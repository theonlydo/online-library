import actionTypes from './constant';
import {GroupList, ItemBook} from './type';

export const setBookList = (value: Array<ItemBook>) => ({
  type: actionTypes.SET_BOOK_LIST,
  value,
});

export const setBookGroupList = (value: Array<GroupList>) => ({
  type: actionTypes.SET_BOOK_GROUP_LIST,
  value,
});

export const setBookLoading = (value: boolean) => ({
  type: actionTypes.SET_BOOK_LOADING,
  value,
});

export const setSelectedBook = (value: ItemBook) => ({
  type: actionTypes.SET_SELECTED_BOOK,
  value,
});

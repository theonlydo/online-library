import actionTypes from './constant';
import {BookState, GroupList} from './type';

export const setBookList = (value: Array<BookState>) => ({
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

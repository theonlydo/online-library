import actionTypes from './constant';
import {BookState} from './type';

export const setBookList = (value: Array<BookState>) => ({
  type: actionTypes.SET_BOOK_LIST,
  value,
});

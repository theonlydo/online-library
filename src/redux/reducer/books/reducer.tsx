import actionTypes from './constant';
import {BookState, initialBookState} from './type';

const Auth = (state: BookState = initialBookState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_BOOK_LIST:
      return {
        ...state,
        list: action.value,
      };
    default:
      return state;
  }
};

export default Auth;

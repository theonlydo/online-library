import actionTypes from './constant';
import {BookState, initialBookState} from './type';

const Auth = (state: BookState = initialBookState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_BOOK_LIST:
      return {
        ...state,
        list: action.value,
      };
    case actionTypes.SET_BOOK_GROUP_LIST:
      return {
        ...state,
        groupList: action.value,
      };
    case actionTypes.SET_BOOK_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    default:
      return state;
  }
};

export default Auth;

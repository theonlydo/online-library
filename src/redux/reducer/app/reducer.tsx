import actionTypes from './constant';
import {AppState, initialAppState} from './type';

const Auth = (state: AppState = initialAppState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.value,
      };
    default:
      return state;
  }
};

export default Auth;

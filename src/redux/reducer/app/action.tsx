import actionTypes from './constant';

export const setLanguage = (value: string) => ({
  type: actionTypes.SET_LANGUAGE,
  value,
});

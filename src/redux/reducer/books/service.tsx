import API from '~services/api';

export const postLogin = (payload: object) => async dispatch => {
  try {
    const res = await API.reqLogin(payload);

    console.log('error: \n', res);
    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve('login error');
  }
};

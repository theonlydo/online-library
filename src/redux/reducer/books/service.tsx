import API from '~services/api';
import {transformBookList} from './type';
import {setBookGroupList, setBookList, setBookLoading} from './action';
import GENRES from '~constants/genres';

export const getBookListByGenre =
  (payload: object) => async (dispatch: any) => {
    try {
      dispatch(setBookLoading(true));
      const res: any = await API.reqGetBookByGenre(payload);

      if (res?.works) {
        const data: any = transformBookList(res?.works, 'love');
        dispatch(setBookList(data));
      }
      dispatch(setBookLoading(false));
      return Promise.resolve(res);
    } catch (err) {
      dispatch(setBookLoading(false));
      return Promise.resolve('login error');
    }
  };

export const getAllBooks = () => async (dispatch: any) => {
  try {
    let result: any = [];
    dispatch(setBookLoading(true));

    for (var i = 0; i < GENRES.length; i++) {
      const payload = {
        params: {
          offset: 0,
          limit: 4,
        },
        path: `/${GENRES[i].toLowerCase()}.json`,
      };

      const res: any = await API.reqGetBookByGenre(payload);
      if (res?.works) {
        const data: any = transformBookList(res?.works, GENRES[i]);
        const groupData = {
          genre: GENRES[i],
          list: data,
        };
        result.push(groupData);
        console.log(groupData);
      }
    }

    console.log('DATA', result);
    dispatch(setBookGroupList(result));
    dispatch(setBookLoading(false));

    return Promise.resolve(result);
  } catch (err) {
    dispatch(setBookLoading(false));
    return Promise.resolve('login error');
  }
};

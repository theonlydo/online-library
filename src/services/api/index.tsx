import ApiRequest from './config';

import {API_ENDPOINT, API_GET_BOOK_GENRE} from '@env';

const API = {
  reqGetBookByGenre: ApiRequest.get(API_ENDPOINT + API_GET_BOOK_GENRE),
};

export default API;

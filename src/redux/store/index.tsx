import {applyMiddleware, createStore} from 'redux';
import {reducer} from '../reducer';
import {AsyncStorage} from '~libraries';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middleware = applyMiddleware(thunk, logger);
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);

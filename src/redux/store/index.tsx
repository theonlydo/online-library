import {reducer} from '../reducer';
import {
  AsyncStorage,
  configureStore,
  persistReducer,
  persistStore,
} from '~libraries';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({reducer: persistedReducer});
export const persistor = persistStore(store);

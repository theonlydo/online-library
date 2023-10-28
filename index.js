import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from '~redux';
import Application from './src';
import {PersistGate} from 'redux-persist/integration/react';
import {name as appName} from 'app.json';
/*
 * This is the root component of our app.
 */
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Application />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);

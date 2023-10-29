import {
  NavigationContainer,
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import CryptoJS from 'crypto-js';
import {useDispatch} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistGate} from 'redux-persist/integration/react';
import DeviceInfo from 'react-native-device-info';
import {configureStore} from '@reduxjs/toolkit';
import {createAction, createReducer} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

export {
  CryptoJS,
  DeviceInfo,
  PersistGate,
  AsyncStorage,
  createAction,
  persistStore,
  createReducer,
  useDispatch,
  CommonActions,
  persistReducer,
  configureStore,
  NavigationContainer,
  createNativeStackNavigator,
  createNavigationContainerRef,
};

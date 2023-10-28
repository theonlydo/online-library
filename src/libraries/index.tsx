import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistGate} from 'redux-persist/integration/react';
import DeviceInfo from 'react-native-device-info';
import CryptoJS from 'crypto-js';
import Config from 'react-native-config';

export default {
  Config,
  DeviceInfo,
  CryptoJS,
  PersistGate,
  AsyncStorage,
  NavigationContainer,
  createNativeStackNavigator,
};

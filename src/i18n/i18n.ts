import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

const id = require('./id');
//const en = require("./en")

i18n.fallbacks = true;
//i18n.translations = { id, en }
i18n.translations = {id};

const fallback = {languageTag: 'id', isRTL: false};
const {languageTag} =
  RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) ||
  fallback;
i18n.locale = languageTag;

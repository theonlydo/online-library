import {Dimensions} from 'react-native';
import {moderateScale} from '~utils/scaling';

const appMetrics = {
  gutter: {
    xxxs: moderateScale(4),
    xxs: moderateScale(6),
    xs: moderateScale(8),
    s: moderateScale(16),
    m: moderateScale(24),
    l: moderateScale(32),
    xl: moderateScale(40),
    xxl: moderateScale(48),
    xxxl: moderateScale(56),
    xxxxl: moderateScale(64),
  },
  rounded: {
    small: moderateScale(4),
    base: moderateScale(8),
    medium: moderateScale(12),
    large: moderateScale(16),
    extraLarge: moderateScale(24),
    huge: moderateScale(48),
    full: 99999,
  },
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
};

export default appMetrics;

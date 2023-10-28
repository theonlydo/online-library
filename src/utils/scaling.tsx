import {Dimensions, PixelRatio} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

export const scale = (size: number) =>
  PixelRatio.roundToNearestPixel((width / guidelineBaseWidth) * size);

export const verticalScale = (size: number) => {
  return (height / guidelineBaseHeight) * size;
};

export const horizontalScale = (size: number) => {
  return (width / guidelineBaseWidth) * size;
};

export const moderateScale = (size: number, factor = 0.5) =>
  PixelRatio.roundToNearestPixel(size + (scale(size) - size) * factor);

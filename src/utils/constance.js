/**
 * 常量
 */

import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

export const VALUE = {
  width: width,
  height: height,
  ios: Platform.OS === 'ios',
  android: Platform.OS === 'android',
};

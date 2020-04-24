import {Dimensions} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';

const {height} = Dimensions.get('window');
export const safeAreaHeight = isIphoneX() ? 45 : 30;
export const safeAreaBottom = isIphoneX() ? 30 : 0;
export const viewportHeight = height - safeAreaBottom;
export const screenHeight = height;
const perfect_Size = create(PREDEF_RES.iphoneX.dp);
export const perfectSize = function(px) {
  return perfect_Size(px);
};

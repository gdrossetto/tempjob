import {Dimensions} from 'react-native';

export function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}
export function vw(percentage) {
  return Dimensions.get('window').width * (percentage / 100);
}

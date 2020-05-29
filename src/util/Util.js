import {Dimensions} from 'react-native';

export function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}
export function vw(percentage) {
  return Dimensions.get('window').width * (percentage / 100);
}

export const firebaseConfig = {
  apiKey: 'AIzaSyBU_uhgAzADwZld6ZkgOefGIzvwGa42y_A',
  authDomain: 'tempjob-64b1b.firebaseapp.com',
  databaseURL: 'https://tempjob-64b1b.firebaseio.com',
  projectId: 'tempjob-64b1b',
  storageBucket: 'tempjob-64b1b.appspot.com',
  messagingSenderId: '214578848740',
  appId: '1:214578848740:web:14a1664e743e27406e9df1',
  measurementId: 'G-1YRLKZEQLQ',
};

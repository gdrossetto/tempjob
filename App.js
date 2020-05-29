import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import AuthStackNavigator from './src/navigators/authStackNav';
import * as firebase from 'firebase/app';
import {firebaseConfig} from './src/util/Util';

const App = () => {
  firebase.initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default App;

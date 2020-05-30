import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AuthStackNavigator from './src/navigators/authStackNav';
import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {firebaseConfig} from './src/util/Util';

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    console.error('Firebase initialization error raised: ', err.stack);
  }
}

const App = () => {
  const [logado, setLogado] = React.useState();

  useEffect(() => {}, []);

  auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      setLogado(true);
    } else {
      setLogado(false);
    }
  });
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AuthStackNavigator logado={logado} />
    </NavigationContainer>
  );
};

export default App;

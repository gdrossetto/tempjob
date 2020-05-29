import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import AuthStackNavigator from './src/navigators/authStackNav';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default App;

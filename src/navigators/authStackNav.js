import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TelaInicial from '../pages/telaInicial';
import LoginPage from '../pages/login';
import EsqueceuSenha from '../pages/esqueceuSenha';
import CriarConta from '../pages/criarConta';
import DrawerNav from './drawerNav';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="telaInicial"
        component={TelaInicial}></AuthStack.Screen>
      <AuthStack.Screen
        options={{title: null, headerTransparent: true}}
        name="Login"
        component={LoginPage}></AuthStack.Screen>
      <AuthStack.Screen
        options={{title: null, headerTransparent: true}}
        name="EsqueceuSenha"
        component={EsqueceuSenha}></AuthStack.Screen>
      <AuthStack.Screen
        options={{title: null, headerTransparent: true}}
        name="CriarConta"
        component={CriarConta}></AuthStack.Screen>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="DrawerNavigator"
        component={DrawerNav}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};
export default AuthStackNavigator;

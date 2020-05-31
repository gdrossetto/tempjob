import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TelaInicial from '../pages/telaInicial';
import LoginPage from '../pages/login';
import EsqueceuSenha from '../pages/esqueceuSenha';
import CriarConta from '../pages/criarConta';
import DrawerNav from './drawerNav';
import CameraViewPerfil from '../pages/cameraViewPerfil';

const AuthStack = createStackNavigator();

const AuthStackNavigator = ({logado}) => {
  return (
    <AuthStack.Navigator>
      {logado ? ( //Se usuário estiver logado o AuthStack abre direto na pagina de vagas Disponíveis
        <AuthStack.Screen
          options={{headerShown: false}}
          name="DrawerNavigator"
          component={DrawerNav}></AuthStack.Screen>
      ) : (
        //Se tiver deslogado vai pra tela inicial
        <AuthStack.Screen
          options={{headerShown: false}}
          name="telaInicial"
          component={TelaInicial}></AuthStack.Screen>
      )}
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
        options={{title: null, headerShown: false}}
        name="TirarFotoPerfil"
        component={CameraViewPerfil}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};
export default AuthStackNavigator;

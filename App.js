/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  StatusBar,
} from 'react-native';
import LoginPage from './src/pages/login';
import TelaInicial from './src/pages/telaInicial';
import EsqueceuSenha from './src/pages/esqueceuSenha';
import CriarConta from './src/pages/criarConta';
import VagasDisponiveis from './src/pages/vagasDisponiveis';
import {Container, Header, Content, Picker, Form, Icon} from 'native-base';
import DetalhesVaga from './src/pages/detalhesVaga';
import DocumentosObrigatorios from './src/pages/documentosObrigatorios';
import CameraView from './src/pages/cameraView';
import SuaConta from './src/pages/suaConta';
function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}
function vw(percentage) {
  return Dimensions.get('window').width * (percentage / 100);
}

const AuthStack = createStackNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="VagasDisponiveis"
        component={VagasDisponiveis}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DetalhesVaga"
        component={DetalhesVaga}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DocumentosObrigatorios"
        component={DocumentosObrigatorios}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Camera"
        component={CameraView}
      />
    </Stack.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          height: vh(8),
          backgroundColor: '#e8e8e8',
          flexDirection: 'row',
        }}>
        <Icon
          onPress={() => props.navigation.closeDrawer()}
          style={{
            marginLeft: vh(2),
            marginRight: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
          name="close"></Icon>
        <Text
          style={{
            marginRight: vw(35),
            marginTop: 'auto',
            marginBottom: 'auto',
            fontWeight: 'bold',
          }}>
          MENU
        </Text>
      </View>
      <DrawerItemList
        activeBackgroundColor={'white'}
        activeTintColor={'#752d91'}
        itemStyle={{borderBottomColor: '#752d91', borderBottomWidth: 0.5}}
        {...props}
      />
    </DrawerContentScrollView>
  );
}

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      drawerPosition={'right'}>
      <Drawer.Screen
        options={{title: 'Vagas Disponíveis'}}
        name="VagasDisponiveis"
        component={StackNavigator}
      />
      <Drawer.Screen
        options={{title: 'Notificações'}}
        name="Notificações"
        component={VagasDisponiveis}
      />
      <Drawer.Screen
        options={{title: 'Candidaturas em Andamento'}}
        name="Candidaturas em Andamento"
        component={VagasDisponiveis}
      />
      <Drawer.Screen
        options={{title: 'Histórico de contratações'}}
        name="Histórico de contratações"
        component={VagasDisponiveis}
      />
      <Drawer.Screen
        options={{title: 'Minha Conta'}}
        name="Minha Conta"
        component={SuaConta}
      />
      <Drawer.Screen
        options={{title: 'Fale com a Tempjob'}}
        name="Fale com a Tempjob"
        component={VagasDisponiveis}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default App;

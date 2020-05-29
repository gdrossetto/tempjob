import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, Dimensions} from 'react-native';
import {Icon} from 'native-base';
import VagasStackNavigator from './vagasStackNav';
import VagasDisponiveis from '../pages/vagasDisponiveis';
import SuaConta from '../pages/suaConta';

function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}
function vw(percentage) {
  return Dimensions.get('window').width * (percentage / 100);
}

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      drawerPosition={'right'}>
      <Drawer.Screen
        options={{title: 'Vagas Disponíveis'}}
        name="VagasDisponiveis"
        component={VagasStackNavigator}
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
export default DrawerNav;

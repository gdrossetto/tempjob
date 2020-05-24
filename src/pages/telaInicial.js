import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import Logo from '../components/logo.component';
import PurpleButton from '../components/purple-button.component';
import WhiteButton from '../components/white-button.component';

function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}

const TelaInicial = ({navigation}) => {
  return (
    <View>
      <Logo style={{marginTop: vh(8)}} />
      <PurpleButton
        style={{marginBottom: 32, marginTop: vh(50)}}
        text={'ACESSAR CONTA'}
        handlePress={() => {
          navigation.navigate('Login');
        }}
      />
      <WhiteButton text={'CRIAR CONTA'} />
    </View>
  );
};
export default TelaInicial;

import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Container, Header, Content, Picker, Form, Icon} from 'native-base';
import {color} from 'react-native-reanimated';
function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}
function vw(percentage) {
  return Dimensions.get('window').width * (percentage / 100);
}

const BotaoDetalhes = ({handlePress}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: '#752d91',
        height: 48,
        width: 48,
        borderRadius: 5,
        marginLeft: vw(20),
      }}>
      <Icon
        name="eye"
        style={{
          color: 'white',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}></Icon>
    </TouchableOpacity>
  );
};

const ItemVaga = ({nomeVaga, nomeEmpresa, handlePress}) => {
  return (
    <View style={styles.vagaContainer}>
      <View>
        <Text style={styles.nomeEmpresa}>{nomeVaga}</Text>
        <Text style={styles.nomeVaga}>{nomeEmpresa.toUpperCase()}</Text>
      </View>
      <BotaoDetalhes handlePress={handlePress} />
    </View>
  );
};
export default ItemVaga;

const styles = StyleSheet.create({
  nomeEmpresa: {
    fontSize: 18,
    color: '#752d91',
    fontWeight: 'bold',
  },
  nomeVaga: {
    fontSize: 16,
    color: 'black',
  },
  vagaContainer: {
    margin: vw(5),
    paddingBottom: 20,
    borderBottomColor: '#752d91',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
});

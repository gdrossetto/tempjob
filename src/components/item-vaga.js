import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import {vw, vh} from '../util/Util';
import BotaoDetalhes from './botao-detalhes.component';

const ItemVaga = ({nomeVaga, nomeEmpresa, handlePress}) => {
  return (
    <View style={styles.vagaContainer}>
      <View style={{width: vw(75)}}>
        <Text style={styles.nomeEmpresa}>{nomeVaga}</Text>
        <Text style={styles.nomeVaga}>{nomeEmpresa.toUpperCase()}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <BotaoDetalhes handlePress={handlePress} />
      </View>
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

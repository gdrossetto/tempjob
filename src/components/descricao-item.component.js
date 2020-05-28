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

const DescricaoItem = ({titulo, corpo, documentos}) => {
  return (
    <View
      style={
        corpo ? styles.descricaoContainer : styles.descricaoContainerDocumento
      }>
      <Text style={styles.descricaoTitulo}>{titulo}</Text>
      {corpo ? (
        <Text style={styles.descricaoCorpo}>{corpo}</Text>
      ) : (
        documentos.map((documento) => {
          return <Text style={styles.descricaoCorpo}>{documento}</Text>;
        })
      )}
    </View>
  );
};
export default DescricaoItem;

const styles = StyleSheet.create({
  descricaoContainer: {
    width: vw(90),
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomColor: '#752d91',
    borderBottomWidth: 0.5,
    paddingBottom: vh(4),
    paddingTop: vh(4),
  },
  descricaoContainerDocumento: {
    width: vw(90),
    marginLeft: 'auto',
    marginRight: 'auto',

    paddingBottom: vh(4),
    paddingTop: vh(4),
  },
  descricaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#752d91',
    marginBottom: vh(2),
  },
  descricaoCorpo: {
    fontSize: 16,
  },
});

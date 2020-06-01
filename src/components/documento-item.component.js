import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Container, Header, Content, Picker, Form, Icon} from 'native-base';
import {color} from 'react-native-reanimated';
import {vw, vh} from '../util/Util';

const DocumentoItem = ({
  tipoDocumento,
  handlePressFoto,
  handlePressDocumento,
  handlePressHistorico,
}) => {
  return (
    <View style={styles.documentoContainer}>
      <Text style={styles.tipoDocumento}>{tipoDocumento}</Text>
      <View style={styles.buttonsContainer}>
        <PurpleButton
          handlePress={handlePressDocumento}
          style={{
            marginLeft: 0,
            marginRight: 0,
            width: vw(40),
            height: vh(6),
            marginTop: vh(4),
          }}
          textStyle={{fontSize: 14}}
          text={'ENVIAR ARQUIVO'}
        />
        <TouchableOpacity
          onPress={handlePressFoto}
          style={styles.iconContainer}>
          <Icon style={styles.icon} name={'camera'} />
          <Text style={styles.iconLabel}>Tirar foto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePressHistorico}
          style={styles.iconContainer}>
          <Icon style={styles.icon} name={'clock'} />
          <Text style={styles.iconLabel}>Histórico docs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DocumentoItem;

const styles = StyleSheet.create({
  documentoContainer: {
    width: vw(90),
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomColor: '#752d91',
    borderBottomWidth: 0.5,
    paddingBottom: vh(4),
    paddingTop: vh(4),
  },
  tipoDocumento: {
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: vw(24),
  },
  icon: {
    textAlign: 'center',
    marginTop: vh(4),
  },
  iconLabel: {
    textAlign: 'center',
    fontSize: 12,
  },
});

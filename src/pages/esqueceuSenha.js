import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {vh} from '../util/Util';

const EsqueceuSenha = () => {
  return (
    <View>
      <Logo style={{marginTop: vh(8), marginBottom: vh(4)}} />
      <Text style={styles.acessarContaTexto}>RECUPERAR SENHA</Text>
      <InputTexto
        style={{marginTop: '15%'}}
        label={'E-mail'}
        placeholder={'Digite seu e-mail'}
      />

      <PurpleButton style={{marginTop: '10%'}} text={'RECUPERAR'} />
    </View>
  );
};
export default EsqueceuSenha;

const styles = StyleSheet.create({
  acessarContaTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  esqueceuSenha: {
    color: '#752d91',
    fontSize: 18,
    textAlign: 'center',
    margin: 40,
  },
});

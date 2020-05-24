import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';

function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}

const LoginPage = () => {
  return (
    <View>
      <Logo style={{marginTop: vh(8), marginBottom: vh(4)}} />
      <Text style={styles.acessarContaTexto}>ACESSE SUA CONTA</Text>
      <InputTexto
        style={{marginTop: '15%'}}
        label={'E-mail'}
        placeholder={'Digite seu e-mail'}
      />
      <InputTexto
        style={{marginTop: '5%'}}
        label={'Senha'}
        placeholder={'Digite sua senha'}
      />
      <PurpleButton style={{marginTop: '20%'}} text={'ENTRAR'} />
      <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>
    </View>
  );
};
export default LoginPage;

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

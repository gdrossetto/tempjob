import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {vh} from '../util/Util';

const LoginPage = ({navigation}) => {
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
      <PurpleButton
        handlePress={() => navigation.navigate('DrawerNavigator')}
        style={{marginTop: '20%'}}
        text={'ENTRAR'}
      />
      <Text
        onPress={() => {
          navigation.navigate('EsqueceuSenha');
        }}
        style={styles.esqueceuSenha}>
        Esqueceu sua senha?
      </Text>
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

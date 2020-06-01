import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {vh} from '../util/Util';
import auth from '@react-native-firebase/auth';

const EsqueceuSenha = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  function recuperarSenha(email) {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          'Pronto',
          'Um email de redefinição de senha foi enviado para você!',
          [{text: 'Ok', onPress: () => navigation.pop()}],
        );
      })
      .catch((e) => {
        Alert.alert(
          'Ocorreu um erro',
          'Verifique o email digitado e tente novamente!',
        );
      });
  }

  return (
    <View>
      <Logo style={{marginTop: vh(8), marginBottom: vh(4)}} />
      <Text style={styles.acessarContaTexto}>RECUPERAR SENHA</Text>
      <InputTexto
        changeText={(text) => setEmail(text)}
        style={{marginTop: '15%'}}
        label={'E-mail'}
        placeholder={'Digite seu e-mail'}
        valor={email}
      />

      <PurpleButton
        handlePress={() => {
          recuperarSenha(email);
        }}
        style={{marginTop: '10%'}}
        text={'RECUPERAR'}
      />
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

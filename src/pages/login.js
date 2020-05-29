import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {vh, firebaseConfig} from '../util/Util';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

async function login(email, password) {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    alert(response.user.email);
  } catch (e) {
    alert(e);
  }
}

const LoginPage = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  React.useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  return (
    <View>
      <Logo style={{marginTop: vh(8), marginBottom: vh(4)}} />
      <Text style={styles.acessarContaTexto}>ACESSE SUA CONTA</Text>
      <InputTexto
        style={{marginTop: '15%'}}
        label={'E-mail'}
        placeholder={'Digite seu e-mail'}
        changeText={(text) => setEmail(text)}
        valor={email}
      />
      <InputTexto
        senha={true}
        style={{marginTop: '5%'}}
        label={'Senha'}
        placeholder={'Digite sua senha'}
        changeText={(text) => setSenha(text)}
        valor={senha}
      />
      <PurpleButton
        handlePress={() => {
          // navigation.navigate('DrawerNavigator');
          login(email, senha).then(() =>
            navigation.navigate('DrawerNavigator'),
          );
        }}
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

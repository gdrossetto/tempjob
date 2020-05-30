import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {vh, firebaseConfig} from '../util/Util';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Loading = ({navigation}) => {
  const [logado, setlogado] = React.useState('');

  React.useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    auth().onAuthStateChanged((user) => {
      if (user) {
        setlogado(true);
      } else {
        setlogado(false);
      }
    });
  }, []);

  return (
    <Text
      style={{
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 46,
        color: 'purple',
      }}>
      Carregando!
    </Text>
  );
};
export default Loading;

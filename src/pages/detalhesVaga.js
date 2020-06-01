import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Container, Header, Content, Picker, Form, Icon} from 'native-base';
import PageHeader from '../components/page-header.component';
import ItemVaga from '../components/item-vaga';
import DescricaoItem from '../components/descricao-item.component';
import {vh, vw} from '../util/Util';
import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const DetalhesVaga = ({navigation, route}) => {
  const {vaga} = route.params;
  const [user, setUser] = React.useState({});
  const {candidato} = route.params;

  function getUser() {
    let authUser = auth().currentUser;
    firestore()
      .collection('users')
      .doc(authUser.uid)
      .get()
      .then((firestoreUser) => setUser(firestoreUser.data()))
      .catch((e) => console.error(e.message));
  }

  function cadastrarVagaFirestore(idVaga) {
    let authUser = auth().currentUser;
    let candidaturas = user.candidaturas;
    console.log(candidaturas);
    candidaturas.push(idVaga);
    console.log(candidaturas);
    firestore()
      .collection('users')
      .doc(authUser.uid)
      .set({candidaturas: candidaturas}, {merge: true})
      .then(() => criarAlertaCadastro())
      .catch((e) => {
        console.log(e.code);
      });
  }

  useFocusEffect(
    React.useCallback(() => {
      getUser();
      // console.log(user.candidaturas);
    }, [user.nome]),
  );

  const criarAlertaCadastro = () =>
    Alert.alert(
      'Parabéns',
      'Para finalizar sua candidatura à vaga, basta você enviar alguns documentos obrigatórios.',
      [
        {
          text: 'OK',
          onPress: () =>
            navigation.navigate('DocumentosObrigatorios', {
              vaga: vaga,
              user: user,
              candidato: true,
            }),
        },
      ],
      {cancelable: false},
    );

  return (
    <ScrollView>
      <PageHeader
        handlePressMenu={() => navigation.openDrawer()}
        navigationPopHandler={
          candidato
            ? () => {
                navigation.pop();
              }
            : () =>
                navigation.navigate('VagasDisponiveis', {
                  screen: 'VagasDisponiveis',
                })
        }
        userName={user.nome ? user.nome.split(' ')[0] : ''}
        hasArrowBack={true}
      />
      <Text style={styles.nomeVaga}>{vaga.nomeVaga.toUpperCase()}</Text>
      <Text style={styles.nomeEmpresa}>{vaga.nomeEmpresa}</Text>
      <DescricaoItem titulo={'Descrição da vaga'} corpo={vaga.descricaoVaga} />
      <DescricaoItem titulo={'Carga Horária:'} corpo={vaga.cargaHoraria} />
      <DescricaoItem
        titulo={'Periodo de contratação:'}
        corpo={vaga.periodoContratacao}
      />
      <DescricaoItem titulo={'Escolaridade:'} corpo={vaga.escolaridade} />
      <DescricaoItem
        titulo={'Documentos Obrigatórios'}
        documentos={vaga.documentosObrigatorios}
      />
      <PurpleButton
        style={{marginTop: vh(2), marginBottom: vh(4), width: vw(60)}}
        text={candidato ? 'ATUALIZAR DOCUMENTOS' : 'ME CANDIDATAR'}
        handlePress={
          candidato
            ? () =>
                navigation.navigate('DocumentosObrigatorios', {
                  vaga: vaga,
                  user: user,
                  candidato: true,
                })
            : () => cadastrarVagaFirestore(vaga.id)
        }
      />
    </ScrollView>
  );
};
export default DetalhesVaga;

const styles = StyleSheet.create({
  nomeVaga: {
    marginTop: vh(4),
    marginBottom: vh(2),
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nomeEmpresa: {
    textAlign: 'center',
    fontSize: 18,
  },
});

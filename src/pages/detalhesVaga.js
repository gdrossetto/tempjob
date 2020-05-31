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

const DetalhesVaga = ({navigation, route}) => {
  const {vaga} = route.params;

  const criarAlertaCadastro = () =>
    Alert.alert(
      'Parabéns',
      'Para finalizar sua candidatura à vaga, basta você enviar alguns documentos obrigatórios.',
      [
        {
          text: 'OK',
          onPress: () =>
            navigation.navigate('DocumentosObrigatorios', {
              documentos: vaga.documentosObrigatorios,
            }),
        },
      ],
      {cancelable: false},
    );

  return (
    <ScrollView>
      <PageHeader
        handlePressMenu={() => navigation.openDrawer()}
        navigationPopHandler={() => navigation.pop()}
        userName={'Gabriel Rossetto'}
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
        text={'ME CANDIDATAR'}
        handlePress={() => criarAlertaCadastro()}
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

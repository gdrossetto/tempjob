import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
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
import DocumentoItem from '../components/documento-item.component';
import {vh, gerarNomeArquivoStorage} from '../util/Util';
import {useFocusEffect} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import DocumentPicker from 'react-native-document-picker';

const DocumentosObrigatorios = ({navigation, route}) => {
  const {vaga} = route.params;
  const documentos = route.params.vaga.documentosObrigatorios;
  const {user} = route.params;

  function criaReferenciaDocumento(idVaga, nomeDocumento, nomeUsuario) {
    return storage().ref(
      `${idVaga}/${nomeUsuario}/${nomeDocumento}/${gerarNomeArquivoStorage(8)}`,
    );
  }

  async function procuraArquivo(idVaga, nomeDocumento, nomeUsuario) {
    try {
      console.log('abriu');
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      criaReferenciaDocumento(idVaga, nomeDocumento, nomeUsuario)
        .putFile(res.uri)
        .then(() => console.log('Sucesso'))
        .catch((e) => console.error(e.code));

      //   console.log(res.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Usuário fechou o picker sem escolher nenhum arquivo!');
      } else {
        throw err;
      }
    }
  }

  function dizOi() {
    console.log('OI');
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log(vaga);
    }, [vaga]),
  );

  return (
    <ScrollView>
      <PageHeader
        handlePressMenu={() => navigation.openDrawer()}
        navigationPopHandler={() => navigation.pop()}
        userName={user.nome ? user.nome : null}
        hasArrowBack={true}
      />
      <Text style={styles.titulo}>DOCUMENTOS OBRIGATÓRIOS</Text>
      {documentos.map((documento) => {
        return (
          <DocumentoItem
            handlePressDocumento={() =>
              procuraArquivo(vaga.id, documento, user.nome)
            }
            handlePressFoto={() =>
              navigation.navigate('Camera', {documento: documento})
            }
            handlePressHistorico={() =>
              navigation.navigate('HistoricoDocs', {
                documento: documento,
                idVaga: vaga.id,
                nomeUser: user.nome,
              })
            }
            tipoDocumento={documento}
          />
        );
      })}
      <PurpleButton
        text={'ATUALIZAR DOCUMENTOS'}
        style={{marginBottom: vh(6), marginTop: vh(6)}}
      />
    </ScrollView>
  );
};
export default DocumentosObrigatorios;

const styles = StyleSheet.create({
  titulo: {
    marginTop: vh(4),
    marginBottom: vh(2),
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

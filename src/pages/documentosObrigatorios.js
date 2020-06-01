import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import PageHeader from '../components/page-header.component';

import DocumentoItem from '../components/documento-item.component';
import {vh, gerarNomeArquivoStorage} from '../util/Util';
import {useFocusEffect} from '@react-navigation/native';

import storage from '@react-native-firebase/storage';

import DocumentPicker from 'react-native-document-picker';

const DocumentosObrigatorios = ({navigation, route}) => {
  const {vaga} = route.params;
  const documentos = vaga.documentosObrigatorios;
  const {user} = route.params;
  const {candidato} = route.params;

  function criaReferenciaDocumento(idVaga, nomeDocumento, emailUsuario) {
    return storage().ref(
      `${idVaga}/${emailUsuario}/${nomeDocumento}/${gerarNomeArquivoStorage(
        8,
      )}`,
    );
  }

  async function procuraArquivo(idVaga, nomeDocumento, emailUsuario) {
    try {
      console.log('abriu');
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      criaReferenciaDocumento(idVaga, nomeDocumento, emailUsuario)
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

  function uploadFotoTirada(idVaga, nomeDocumento, emailUsuario, foto) {
    criaReferenciaDocumento(idVaga, nomeDocumento, emailUsuario)
      .putFile(foto)
      .then(() => {
        console.log('Sucesso');
      })
      .catch((e) => console.error(error.code));
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
        navigationPopHandler={
          candidato
            ? () => navigation.pop()
            : () => navigation.navigate('VagasDisponiveis')
        }
        userName={user.nome ? user.nome.split(' ')[0] : ''}
        hasArrowBack={true}
      />
      <Text style={styles.titulo}>DOCUMENTOS OBRIGATÓRIOS</Text>
      {documentos.map((documento) => {
        return (
          <DocumentoItem
            handlePressDocumento={() =>
              procuraArquivo(vaga.id, documento, user.email)
            }
            handlePressFoto={() =>
              navigation.navigate('Camera', {
                documento: documento,
                vaga: vaga,
                user: user,
              })
            }
            handlePressHistorico={() =>
              navigation.navigate('HistoricoDocs', {
                documento: documento,
                idVaga: vaga.id,
                emailUsuario: user.email,
              })
            }
            tipoDocumento={documento}
          />
        );
      })}
      <PurpleButton
        handlePress={
          candidato
            ? () => navigation.pop()
            : () => navigation.navigate('VagasDisponiveis')
        }
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

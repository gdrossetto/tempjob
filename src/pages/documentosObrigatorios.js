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

function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}
function vw(percentage) {
  return Dimensions.get('window').width * (percentage / 100);
}

const DocumentosObrigatorios = ({navigation, route}) => {
  const {documentos} = route.params;

  return (
    <ScrollView>
      <PageHeader
        handlePressMenu={() => navigation.openDrawer()}
        navigationPopHandler={() => navigation.pop()}
        userName={'Gabriel Rossetto'}
        hasArrowBack={true}
      />
      <Text style={styles.titulo}>DOCUMENTOS OBRIGATÓRIOS</Text>
      {documentos.map((documento) => {
        return (
          <DocumentoItem
            handlePressFoto={() =>
              navigation.navigate('Camera', {documento: documento})
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

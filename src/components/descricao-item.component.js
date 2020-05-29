import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {vw, vh} from '../util/Util';

const DescricaoItem = ({titulo, corpo, documentos}) => {
  return (
    <View
      style={
        corpo ? styles.descricaoContainer : styles.descricaoContainerDocumento
      }>
      <Text style={styles.descricaoTitulo}>{titulo}</Text>
      {corpo ? (
        <Text style={styles.descricaoCorpo}>{corpo}</Text>
      ) : (
        documentos.map((documento) => {
          return <Text style={styles.descricaoCorpo}>{documento}</Text>;
        })
      )}
    </View>
  );
};
export default DescricaoItem;

const styles = StyleSheet.create({
  descricaoContainer: {
    width: vw(90),
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomColor: '#752d91',
    borderBottomWidth: 0.5,
    paddingBottom: vh(4),
    paddingTop: vh(4),
  },
  descricaoContainerDocumento: {
    width: vw(90),
    marginLeft: 'auto',
    marginRight: 'auto',

    paddingBottom: vh(4),
    paddingTop: vh(4),
  },
  descricaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#752d91',
    marginBottom: vh(2),
  },
  descricaoCorpo: {
    fontSize: 16,
  },
});

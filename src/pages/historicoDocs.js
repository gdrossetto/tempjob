import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import PageHeader from '../components/page-header.component';
import ItemVaga from '../components/item-vaga';
import {vh, vw} from '../util/Util';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useFocusEffect} from '@react-navigation/native';
import PurpleButton from '../components/purple-button.component';

const HistoricoDocs = ({navigation, route}) => {
  const {idVaga} = route.params;
  const {documento} = route.params;
  const {nomeUser} = route.params;
  const [listaDocs, setLista] = React.useState([]);
  const [lista, setList] = React.useState([]);
  var listaDocumentos = [];

  function getHistoricoDocs(idVaga, nomeUser, documento) {
    if (listaDocs.length <= 0) {
      storage()
        .ref(`${idVaga}/${nomeUser}/${documento}`)
        .listAll()
        .then((list) => {
          setList(list);
          list.items.forEach((item) => {
            item.getDownloadURL().then((url) => {
              setLista((listaDocs) => [...listaDocs, url]);
            });
          });
        })
        .catch((e) => console.error(e.code));
    }
  }

  React.useEffect(() => {
    getHistoricoDocs(idVaga, nomeUser, documento);
    console.log(listaDocs);
  }, [listaDocs]);

  return (
    <ScrollView>
      <PageHeader
        navigationPopHandler={() => navigation.pop()}
        hasArrowBack={true}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 22,
          fontWeight: 'bold',
          margin: vh(4),
        }}>
        Histórico de {documento}
      </Text>
      {listaDocs.map((item, key) => {
        return (
          <View
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: vh(5),
              borderWidth: 2,
              borderColor: '#752d91',
              borderRadius: 5,
            }}>
            <Image
              style={{height: vh(40), width: vw(90)}}
              source={{uri: item}}
            />
            <PurpleButton
              handlePress={() => Linking.openURL(item)}
              style={{width: vw(90), borderRadius: 0}}
              text={'Aperte para ver inteiro'}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default HistoricoDocs;

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import PageHeader from '../components/page-header.component';
import ItemVaga from '../components/item-vaga';
import {vh, vw} from '../util/Util';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';

const CandidaturaAndamento = ({navigation}) => {
  const [user, setUser] = React.useState({});
  const [vagas, setVagas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  function getVagas() {
    let vagas = [];
    firestore()
      .collection('vagas')
      .orderBy('nomeVaga', 'asc')
      .get()
      .then((snapshot) => {
        snapshot.forEach((vaga) => {
          vagas.push(vaga.data());
        });
        setVagas(vagas);
        setLoading(false);
      });
  }

  useFocusEffect(
    React.useCallback(() => {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      auth().onAuthStateChanged((user) => {
        if (user) {
          firestore()
            .collection('users')
            .doc(user.uid)
            .get()
            .then((response) => {
              setUser(response.data());
            });
        } else {
          console.log('erro');
        }
      });
    }, [user.nome]),
  );
  useFocusEffect(
    React.useCallback(() => {
      getVagas();
    }, [vagas.length]),
  );
  return (
    <ScrollView>
      <PageHeader
        handlePressMenu={() => {
          navigation.openDrawer();
        }}
        userName={user.nome ? user.nome.split(' ')[0] : ''}
        hasArrowBack={false}
        navigationPopHandler={() => navigation.pop()}
      />

      <Text
        style={{
          textAlign: 'center',
          marginTop: vh(5),
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        CANDIDATURAS EM ANDAMENTO
      </Text>
      {loading ? (
        <ActivityIndicator
          style={{marginTop: vh(5)}}
          size="large"
          color="#752d91"
        />
      ) : null}
      <FlatList
        nestedScrollEnabled
        style={{marginTop: vh(3)}}
        horizontal={false}
        data={vagas}
        renderItem={({item}) =>
          user.candidaturas ? (
            user.candidaturas.indexOf(item.id) != -1 ? (
              <ItemVaga
                handlePress={() =>
                  navigation.navigate('DetalhesVaga', {
                    vaga: item,
                    candidato: true,
                  })
                }
                nomeEmpresa={item.nomeEmpresa}
                nomeVaga={item.nomeVaga}
              />
            ) : null
          ) : null
        }
        keyExtractor={(item) => item.nomeEmpresa}
      />
    </ScrollView>
  );
};
export default CandidaturaAndamento;

const styles = StyleSheet.create({
  notificacoesScroll: {
    flexDirection: 'row',
  },
});

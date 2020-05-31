import * as React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import PageHeader from '../components/page-header.component';
import ItemVaga from '../components/item-vaga';
import {vh, vw} from '../util/Util';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const VagasDisponiveis = ({navigation}) => {
  var vagas2 = [
    {
      vaga: 'Motorista de caminhão',
      nomeEmpresa: 'Ambev',
      fotoEmpresa:
        'https://4.bp.blogspot.com/-0PHGWgU8NXo/WQmbqP2_CvI/AAAAAAAA_Rk/VIHSBMicHXI7TmQ2K4hCBEXF_gHyrU0ZgCLcB/s400/ambev.jpeg',
      descricaoVaga:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in velit mauris. Fusce consectetur lorem eget congue pretium. Vestibulum non nulla sed tortor viverra ullamcorper non quis odio. Nullam eu laoreet mi. Cras luctus enim sit amet tincidunt faucibus. Quisque ut risus eget ex tincidunt consectetur. Etiam ullamcorper quam lorem, facilisis vehicula urna dictum sit amet. Aliquam eu consequat quam. Suspendisse potenti.',
      cargaHoraria: 'Das 8:30 às 18:00',
      periodoContratacao: '18/02/2020 - 19/03/2020',
      escolaridade: 'Médio Completo',
      documentosObrigatorios: [
        'RG',
        'CPF',
        'Certificado Conclusão Ensino Medio',
      ],
    },
    {
      vaga: 'Analista de segurança',
      nomeEmpresa: 'Netshoes',
      fotoEmpresa:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdX4KoAbLfKRHqcGRQZkMU31O2V_vJsyBA3ButugsLfxHixWaf&usqp=CAU',
      descricaoVaga:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in velit mauris. Fusce consectetur lorem eget congue pretium. Vestibulum non nulla sed tortor viverra ullamcorper non quis odio. Nullam eu laoreet mi. Cras luctus enim sit amet tincidunt faucibus. Quisque ut risus eget ex tincidunt consectetur. Etiam ullamcorper quam lorem, facilisis vehicula urna dictum sit amet. Aliquam eu consequat quam. Suspendisse potenti.',
      cargaHoraria: 'Das 8:30 às 18:00',
      periodoContratacao: '18/02/2020 - 19/03/2020',
      escolaridade: 'Médio Completo',
      documentosObrigatorios: [
        'RG',
        'CPF',
        'Certificado Conclusão Ensino Medio',
      ],
    },
    {
      vaga: 'Motorista de caminhão',
      nomeEmpresa: 'Revelare',
      fotoEmpresa:
        'https://media-exp1.licdn.com/dms/image/C4D0BAQGt1rzeMbHFIQ/company-logo_200_200/0?e=2159024400&v=beta&t=fnL_7pr5kvXGI0WHNoS5KuugBZlXfVE7hxbUCGJRteo',
      descricaoVaga:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in velit mauris. Fusce consectetur lorem eget congue pretium. Vestibulum non nulla sed tortor viverra ullamcorper non quis odio. Nullam eu laoreet mi. Cras luctus enim sit amet tincidunt faucibus. Quisque ut risus eget ex tincidunt consectetur. Etiam ullamcorper quam lorem, facilisis vehicula urna dictum sit amet. Aliquam eu consequat quam. Suspendisse potenti.',
      cargaHoraria: 'Das 8:30 às 18:00',
      periodoContratacao: '18/02/2020 - 19/03/2020',
      escolaridade: 'Médio Completo',
      documentosObrigatorios: [
        'RG',
        'CPF',
        'Certificado Conclusão Ensino Medio',
      ],
    },
  ];

  const [user, setUser] = React.useState({});
  const [vagas, setVagas] = React.useState([]);

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
      });
  }

  React.useEffect(() => {
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
  }, [user.nome]);

  React.useEffect(() => {
    getVagas();
  }, [vagas.length]);

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
      <FlatList
        style={{marginTop: vh(3)}}
        horizontal={true}
        data={vagas}
        renderItem={({item}) => (
          <Image
            style={{
              height: 64,
              width: 64,
              marginHorizontal: 10,
              borderRadius: 32,
            }}
            source={{uri: item.fotoEmpresa}}></Image>
        )}
        keyExtractor={(item) => item.nomeEmpresa}
      />
      <Text
        style={{
          textAlign: 'center',
          marginTop: vh(5),
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        VAGAS DISPONÍVEIS
      </Text>
      <FlatList
        nestedScrollEnabled
        style={{marginTop: vh(3)}}
        horizontal={false}
        data={vagas}
        renderItem={({item}) => (
          <ItemVaga
            handlePress={() =>
              navigation.navigate('DetalhesVaga', {vaga: item})
            }
            nomeEmpresa={item.nomeEmpresa}
            nomeVaga={item.nomeVaga}
          />
        )}
        keyExtractor={(item) => item.nomeEmpresa}
      />
    </ScrollView>
  );
};
export default VagasDisponiveis;

const styles = StyleSheet.create({
  notificacoesScroll: {
    flexDirection: 'row',
  },
});

import * as React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import PageHeader from '../components/page-header.component';
import ItemVaga from '../components/item-vaga';
import {vh, vw} from '../util/Util';

const VagasDisponiveis = ({navigation}) => {
  var vagas = [
    {
      vaga: 'Motorista de caminhão',
      nomeEmpresa: 'Ambev',
      fotoEmpresa: require('../assets/imgs/ambev.png'),
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
      nomeEmpresa: 'Grupo Vip',
      fotoEmpresa: require('../assets/imgs/vip.png'),
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
      fotoEmpresa: require('../assets/imgs/revelare.png'),
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

  return (
    <ScrollView>
      <PageHeader
        handlePressMenu={() => {
          navigation.openDrawer();
        }}
        userName={'Gabriel Rossetto'}
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
            source={item.fotoEmpresa}></Image>
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
            nomeVaga={item.vaga}
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

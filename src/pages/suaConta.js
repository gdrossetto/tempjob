import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import InputPicker from '../components/input-picker.components';
import PageHeader from '../components/page-header.component';
import WhiteButton from '../components/white-button.component';
import {vh, vw} from '../util/Util';
import ItemHistorico from '../components/item-historico.component';

const SuaConta = ({navigation}) => {
  const [aba, setAba] = React.useState(1);

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
      data: '22/05/2020',
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
      data: '22/05/2020',
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
      data: '22/05/2020',
    },
  ];

  return (
    <ScrollView>
      <PageHeader
        hasArrowBack={true}
        handlePressMenu={() => navigation.openDrawer()}
        navigationPopHandler={() => navigation.navigate('VagasDisponiveis')}
        userName={'Gabriel Rossetto'}
      />

      <Text style={styles.acessarContaTexto}>SUA CONTA</Text>

      <View
        style={{flexDirection: 'row', marginTop: vh(4), marginBottom: vh(4)}}>
        <PurpleButton
          text={'Dados'}
          textStyle={{fontSize: 14, color: aba == 1 ? 'white' : '#752d91'}}
          handlePress={() => setAba(1)}
          style={{
            height: vh(4),
            width: vw(30),
            marginRight: 0,
            backgroundColor: aba == 1 ? '#752d91' : null,
            borderColor: '#752d91',
            borderWidth: 0.5,
          }}
        />
        <WhiteButton
          text={'Histórico'}
          textStyle={{fontSize: 14, color: aba == 2 ? 'white' : '#752d91'}}
          handlePress={() => setAba(2)}
          style={{
            height: vh(4),
            width: vw(30),
            backgroundColor: aba == 2 ? '#752d91' : null,
            borderColor: '#752d91',
            borderWidth: 0.5,
            marginLeft: 0,
          }}
        />
      </View>

      {aba == 1 ? (
        <View>
          <View>
            <Image
              style={styles.userPicture}
              source={require('../assets/imgs/user2.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                width: vw(50),
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: vh(2),
                marginBottom: vh(4),
              }}>
              <Icon style={styles.iconeAdicionarFoto} name="camera"></Icon>
              <Text style={styles.textoAdicionarFoto}>Adicionar foto</Text>
            </View>
          </View>
          <InputTexto style={{marginTop: '5%'}} label={'Nome'} />
          <InputTexto style={{marginTop: '5%'}} label={'E-mail'} />
          <InputTexto style={{marginTop: '5%'}} label={'Senha'} />
          <InputTexto style={{marginTop: '5%'}} label={'Confirmar senha'} />
          <InputTexto style={{marginTop: '5%'}} label={'CPF'} />
          <InputTexto style={{marginTop: '5%'}} label={'Data de nascimento'} />
          <InputPicker
            style={{marginTop: '10%'}}
            label={'Vagas de interesse'}
          />
          <InputPicker />
          <InputPicker />
          <InputPicker style={{marginTop: '10%'}} label={'Estado'} />
          <InputPicker style={{marginTop: '10%'}} label={'Cidade'} />
          <PurpleButton
            style={{marginTop: '15%', marginBottom: '5%'}}
            text={'SALVAR'}
          />
          <WhiteButton
            style={{
              marginBottom: '10%',
              backgroundColor: 'white',
              borderColor: '#752d91',
              borderWidth: 0.5,
            }}
            text={'SAIR'}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.historicoTitle}>Histórico de contratações</Text>
          {vagas.map((vaga) => {
            return (
              <View>
                <ItemHistorico
                  nomeEmpresa={vaga.nomeEmpresa}
                  nomeVaga={vaga.vaga}
                  data={vaga.data}
                />
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};
export default SuaConta;

const styles = StyleSheet.create({
  acessarContaTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: vh(4),
  },

  dadosPessoais: {
    color: '#752d91',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 30,
  },
  userPicture: {
    height: 80,
    width: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textoAdicionarFoto: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 16,
    fontSize: 18,
  },
  iconeAdicionarFoto: {
    marginLeft: 'auto',

    marginLeft: 16,
    fontSize: 22,
  },
  historicoTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: vh(3),
    marginBottom: vh(3),
  },
});

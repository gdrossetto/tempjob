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
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SuaConta = ({navigation}) => {
  const [aba, setAba] = React.useState(1);
  const [user, setUser] = React.useState({});
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [confirmarSenha, setConfirmarSenha] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [dataNascimento, setDataNascimento] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [cidade, setCidade] = React.useState();
  const [estados, setEstados] = React.useState([]);
  const [cidades, setCidades] = React.useState([]);
  const [camposSetados, setCamposSetados] = React.useState(false);
  const [userFirestoreRef, setUserRef] = React.useState();
  const [uid, setUid] = React.useState('');
  function getEstados() {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    )
      .then((response) => response.json())
      .then((responseJson) => setEstados(responseJson));
  }

  function getCidades(estado) {
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios?orderBy=nome`,
    )
      .then((response) => response.json())
      .then((responseJson) => setCidades(responseJson));
  }

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

  React.useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        firestore()
          .collection('users')
          .doc(authUser.uid)
          .get()
          .then((response) => {
            setUser(response.data());
          });
        setUid(authUser.uid);
      } else {
        console.log('erro');
      }
      getEstados();
    });
  }, [user.nome]);

  React.useEffect(() => {
    setNome(user.nome);
    setEmail(user.email);
    setEstado(user.estado);
    setCpf(user.cpf);
    setDataNascimento(user.dataNasc);
  }, [user]);

  React.useEffect(() => {
    getCidades(estado);
  }, [estado]);

  React.useEffect(() => {
    setCidade(user.cidade);
  }, [cidades.length]);

  function atualizarCadastro(nome, cpf, dataNasc, estado, cidade) {
    firestore().collection('users').doc(uid).set(
      {
        nome: nome,
        cpf: cpf,
        dataNasc: dataNasc,
        estado: estado,
        cidade: cidade,
      },
      {merge: true},
    );
  }
  return (
    <ScrollView>
      <PageHeader
        hasArrowBack={true}
        handlePressMenu={() => navigation.openDrawer()}
        navigationPopHandler={() => navigation.navigate('VagasDisponiveis')}
        userName={user.nome ? user.nome.split(' ')[0] : ''}
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
          <InputTexto
            changeText={(text) => setNome(text)}
            valor={nome}
            style={{marginTop: '5%'}}
            label={'Nome'}
          />
          <InputTexto
            changeText={(text) => setEmail(text)}
            valor={email}
            style={{marginTop: '5%'}}
            label={'E-mail'}
            editavel={false}
          />
          <InputTexto style={{marginTop: '5%'}} label={'Senha'} />
          <InputTexto style={{marginTop: '5%'}} label={'Confirmar senha'} />
          <InputTexto
            valor={cpf}
            changeText={(text) => setCpf(text)}
            style={{marginTop: '5%'}}
            label={'CPF'}
          />
          <InputTexto
            valor={dataNascimento}
            changeText={(text) => setDataNascimento(text)}
            style={{marginTop: '5%'}}
            label={'Data de nascimento'}
          />
          <InputPicker
            data={[]}
            style={{marginTop: '10%'}}
            label={'Vagas de interesse'}
          />
          <InputPicker data={[]} />
          <InputPicker data={[]} />
          <InputPicker
            valor={estado}
            mudaValor={(itemValue, itemIndex) => {
              setEstado(itemValue);
              getCidades(itemValue);
              setCidade('');
            }}
            data={estados}
            style={{marginTop: '10%'}}
            label={'Estado'}
          />
          <InputPicker
            listaCidades={true}
            valor={cidade}
            mudaValor={(itemValue, itemIndex) => {
              setCidade(itemValue);
            }}
            data={cidades}
            style={{marginTop: '10%'}}
            label={'Cidade'}
          />
          <PurpleButton
            handlePress={() =>
              atualizarCadastro(nome, cpf, dataNascimento, estado, cidade)
            }
            style={{marginTop: '15%', marginBottom: '5%'}}
            text={'SALVAR'}
          />
          <WhiteButton
            handlePress={() => {
              auth().signOut();
            }}
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

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import InputPicker from '../components/input-picker.components';
import PageHeader from '../components/page-header.component';
import WhiteButton from '../components/white-button.component';
import {vh, vw, gerarNomeArquivoStorage} from '../util/Util';
import ItemHistorico from '../components/item-historico.component';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import InputPickerVagas from '../components/input-picker-vagas.component';
import {useFocusEffect} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import InputData from '../components/input-data.component';
import InputCpf from '../components/input-cpf.component';

const SuaConta = ({navigation, route}) => {
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
  const [foto, setFoto] = React.useState('');
  const [vagas, setVagas] = React.useState([]);
  const [vaga1, setVaga1] = React.useState();
  const [vaga2, setVaga2] = React.useState();
  const [vaga3, setVaga3] = React.useState();
  const [fotoRefStorage, setRef] = React.useState('');
  const [linkFoto, setLinkFoto] = React.useState('');

  const params = route.params;

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

  var vagasTemplate = [
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
    setRef(`profilepics/${gerarNomeArquivoStorage(8)}`);
  }, []);

  React.useEffect(() => {
    if (params) {
      setLinkFoto(params);
    }
  }, [params]);

  React.useEffect(() => {
    if (linkFoto != '') {
      console.log(linkFoto);
      storage()
        .ref(fotoRefStorage)
        .putFile(linkFoto.foto)
        .then(() => console.log('sucesso'))
        .catch((e) => console.error(e.message));
    }
  }, [linkFoto]);

  useFocusEffect(
    React.useCallback(() => {
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
    }, [user.nome]),
  );

  useFocusEffect(
    React.useCallback(() => {
      getVagas();
    }, [vagas.length]),
  );

  useFocusEffect(
    React.useCallback(() => {
      setNome(user.nome);
      setEmail(user.email);
      setFoto(user.foto);
      setEstado(user.estado);
      setCpf(user.cpf);
      setVaga1(user.vaga1),
        setVaga2(user.vaga2),
        setVaga3(user.vaga3),
        setDataNascimento(user.dataNasc);
    }, [user]),
  );

  useFocusEffect(
    React.useCallback(() => {
      getCidades(estado);
    }, [estado]),
  );

  useFocusEffect(
    React.useCallback(() => {
      setCidade(user.cidade);
      console.log('oi');
    }, [user.cidade]),
  );

  function atualizarCadastro(
    nome,
    cpf,
    dataNasc,
    estado,
    cidade,
    vaga1,
    vaga2,
    vaga3,
    linkFoto,
  ) {
    firestore()
      .collection('users')
      .doc(uid)
      .set(
        {
          nome: nome,
          cpf: cpf,
          dataNasc: dataNasc,
          estado: estado,
          cidade: cidade,
          vaga1: vaga1,
          vaga2: vaga2,
          vaga3: vaga3,
          foto: linkFoto,
        },
        {merge: true},
      )
      .then(() => {
        Alert.alert('Sucesso', 'Cadastro atualizado');
      });
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
          handlePress={() => navigation.jumpTo('Historico de contratações')}
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

      <View>
        <View>
          <Image
            style={styles.userPicture}
            source={linkFoto != '' ? {uri: linkFoto.foto} : {uri: foto}}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AlterarFotoPerfil');
            }}>
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
          </TouchableOpacity>
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
        <InputTexto
          valor={senha}
          changeText={(text) => setSenha(text)}
          senha={true}
          style={{marginTop: '5%'}}
          label={'Senha'}
        />
        <InputTexto
          valor={confirmarSenha}
          changeText={(text) => setConfirmarSenha(text)}
          senha={true}
          style={{marginTop: '5%'}}
          label={'Confirmar senha'}
        />
        <InputCpf
          cpf={cpf}
          changeText={(text) => setCpf(text)}
          style={{marginTop: '5%'}}
          label={'CPF'}
        />
        <InputData
          data={dataNascimento}
          changeText={(text) => setDataNascimento(text)}
          style={{marginTop: '5%'}}
          label={'Data de nascimento'}
        />

        <InputPickerVagas
          data={vagas}
          style={{marginTop: '5%'}}
          label={'Vagas de interesse'}
          valor={vaga1}
          mudaValor={(itemValue, itemIndex) => {
            setVaga1(itemValue);
          }}
        />
        <InputPickerVagas
          mudaValor={(itemValue, itemIndex) => {
            setVaga2(itemValue);
          }}
          valor={vaga2}
          data={vagas}
        />
        <InputPickerVagas
          mudaValor={(itemValue, itemIndex) => {
            setVaga3(itemValue);
          }}
          valor={vaga3}
          data={vagas}
        />
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
          handlePress={() => {
            if (senha != '') {
              if (senha == confirmarSenha) {
                let user = auth().currentUser;
                user
                  .updatePassword(senha)
                  .then(() => {
                    Alert.alert(
                      'Sucesso',
                      'Sua senha foi alterada com sucesso!',
                    );
                  })
                  .catch((e) => {
                    if (e.code == 'auth/requires-recent-login') {
                      Alert.alert(
                        'Erro ao alterar senha',
                        'Por questões de segurança, você precisa ter efetuado login há pouco tempo para alterar sua senha.Faça o login novamente para alterar a sua senha!',
                      );
                    }
                  });
              } else {
                Alert.alert(
                  'Atenção',
                  'Confirme a sua nova senha corretamente',
                );
              }
            }
            storage()
              .ref(fotoRefStorage)
              .getDownloadURL()
              .then((fotoUrl) => {
                atualizarCadastro(
                  nome,
                  cpf,
                  dataNascimento,
                  estado,
                  cidade,
                  vaga1,
                  vaga2,
                  vaga3,
                  fotoUrl,
                );
              })
              .catch((e) => {
                if (e.code === 'storage/object-not-found') {
                  atualizarCadastro(
                    nome,
                    cpf,
                    dataNascimento,
                    estado,
                    cidade,
                    vaga1,
                    vaga2,
                    vaga3,
                    foto,
                  );
                } else {
                  alert(e.code);
                }
              });
          }}
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
    borderRadius: 40,
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

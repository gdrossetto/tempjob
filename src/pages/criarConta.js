import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Icon} from 'native-base';
import InputPicker from '../components/input-picker.components';
import NumberFormat from 'react-number-format';
import {vh, vw, gerarNomeArquivoStorage} from '../util/Util';
import InputTelefone from '../components/input-telefone.component';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import InputPickerVagas from '../components/input-picker-vagas.component';

const FotoDiv = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const CriarConta = ({navigation, route}) => {
  const [radioCheck, setRadioCheck] = React.useState(false);
  const [estados, setEstados] = React.useState([]);
  const [estado, setEstado] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [cidades, setCidades] = React.useState([]);
  const [nome, setNome] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [linkFoto, setFoto] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [confirmaSenha, setConfirmaSenha] = React.useState('');
  const [vagasPreferidas, setVagas] = React.useState([]);
  const [vaga1, setVaga1] = React.useState(0);
  const [vaga2, setVaga2] = React.useState(0);
  const [vaga3, setVaga3] = React.useState(0);
  const [fotoRefStorage, setRef] = React.useState('');

  const params = route.params;

  if (!firebase.apps.length) {
    try {
      firebase.initializeApp(firebaseConfig);
    } catch (err) {
      console.error('Firebase initialization error raised: ', err.stack);
    }
  }

  function checarCamposPreenchidos() {
    if (
      nome != '' &&
      telefone != '' &&
      estado != '' &&
      cidade != '' &&
      email != '' &&
      senha != '' &&
      confirmaSenha != ''
    ) {
      return true;
    } else {
      return false;
    }
  }

  function checarSenhaConfirmada() {
    if (senha == confirmaSenha) {
      return true;
    } else {
      return false;
    }
  }

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
    console.log(cidades);
  }

  function criarConta(
    nome,
    telefone,
    email,
    estado,
    cidade,
    senha,
    vaga1,
    vaga2,
    vaga3,
    linkFoto,
  ) {
    auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((response) =>
        criarUsuarioFirestore(
          response.user.uid,
          nome,
          telefone,
          email,
          estado,
          cidade,
          vaga1,
          vaga2,
          vaga3,
          linkFoto,
        ),
      )
      .then(() => navigation.navigate('Login'))
      .catch((e) => alert(e.message));
  }

  function criarUsuarioFirestore(
    uid,
    nome,
    telefone,
    email,
    estado,
    cidade,
    vaga1,
    vaga2,
    vaga3,
    linkFoto,
  ) {
    var ref = firestore().collection('users');
    try {
      ref.doc(uid).set({
        email: email,
        nome: nome,
        telefone: telefone,
        estado: estado,
        cidade: cidade,
        vaga1: vaga1,
        vaga2: vaga2,
        vaga3: vaga3,
        foto: linkFoto,
        candidaturas: [],
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  React.useEffect(() => {
    setRef(`profilepics/${gerarNomeArquivoStorage(8)}`);
  }, []);

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

  React.useEffect(() => {
    if (params) {
      setFoto(params);
    }
  }, [params]);

  React.useEffect(() => {
    getVagas();
  }, [vagasPreferidas.length]);

  React.useEffect(() => {
    getEstados();
  }, [estados.length]);

  return (
    <ScrollView>
      <Logo style={{marginTop: vh(8), marginBottom: vh(4)}} />
      <Text style={styles.acessarContaTexto}>CRIE SUA CONTA</Text>
      <Text style={styles.dadosPessoais}>Dados pessoais</Text>
      <TouchableOpacity onPress={() => navigation.navigate('TirarFotoPerfil')}>
        <FotoDiv>
          <Image
            style={styles.userPicture}
            source={
              linkFoto != ''
                ? {uri: linkFoto.foto}
                : require('../assets/imgs/user2.png')
            }
          />
          <Icon style={styles.iconeAdicionarFoto} name="camera"></Icon>
          <Text style={styles.textoAdicionarFoto}>Adicionar foto</Text>
        </FotoDiv>
      </TouchableOpacity>
      <InputTexto
        changeText={(text) => setNome(text)}
        style={{marginTop: '5%'}}
        label={'Nome completo'}
        valor={nome}
      />

      <InputTelefone
        telefone={telefone}
        changeText={(text) => setTelefone(text)}
        style={{marginTop: '5%'}}
        label={'Telefone'}
      />
      <InputPicker
        valor={estado}
        mudaValor={(itemValue, itemIndex) => {
          setEstado(itemValue);
          getCidades(itemValue);
          setCidade('');
        }}
        data={estados}
        style={{marginTop: '5%'}}
        label={'Estado'}
      />
      <InputPicker
        listaCidades={true}
        data={cidades}
        mudaValor={(itemValue, itemIndex) => {
          setCidade(itemValue);
        }}
        valor={cidade}
        style={{marginTop: '5%'}}
        label={'Cidade'}
      />
      <InputTexto
        changeText={(text) => setEmail(text)}
        style={{marginTop: '5%'}}
        label={'E-mail'}
        valor={email}
      />
      <InputPickerVagas
        data={vagasPreferidas}
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
        data={vagasPreferidas}
      />
      <InputPickerVagas
        mudaValor={(itemValue, itemIndex) => {
          setVaga3(itemValue);
        }}
        valor={vaga3}
        data={vagasPreferidas}
      />
      <InputTexto
        senha={true}
        changeText={(text) => setSenha(text)}
        style={{marginTop: '5%'}}
        label={'Senha'}
        valor={senha}
      />
      <InputTexto
        senha={true}
        changeText={(text) => setConfirmaSenha(text)}
        style={{marginTop: '5%'}}
        label={'Digite novamente a senha'}
        valor={confirmaSenha}
      />
      <View
        style={{
          flexDirection: 'row',
          width: vw(80),
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Icon
          onPress={() => {
            setRadioCheck(!radioCheck);
          }}
          name={radioCheck ? 'radio-button-on' : 'radio-button-off'}
          style={styles.iconeRadioButton}
        />
        <Text style={styles.textoTermosUso}>
          Estou de acordo com as
          <Text style={{fontWeight: 'bold'}}>
            {' '}
            Políticas de Privacidade
          </Text> e <Text style={{fontWeight: 'bold'}}>Termos de Uso</Text>
        </Text>
      </View>
      <PurpleButton
        handlePress={() => {
          if (
            checarCamposPreenchidos() == true &&
            checarSenhaConfirmada() == true &&
            radioCheck == true
          )
            storage()
              .ref(fotoRefStorage)
              .getDownloadURL()
              .then((fotoUrl) => {
                criarConta(
                  nome,
                  telefone,
                  email,
                  estado,
                  cidade,
                  senha,
                  vaga1,
                  vaga2,
                  vaga3,
                  fotoUrl,
                );
              });
          //console.log(`${vaga1},${vaga2},${vaga3}`);
          else if (checarCamposPreenchidos() == false) {
            alert('Preencha todos os campos!');
          } else if (checarSenhaConfirmada() == false) {
            alert('Suas senhas são diferentes!');
          } else if (radioCheck == false) {
            alert(
              'Você precisa aceitar as Políticas de Privacidade e Termos de uso para criar sua conta!',
            );
          }
        }}
        style={{marginTop: '10%', marginBottom: '10%'}}
        text={'CADASTRAR'}
      />
    </ScrollView>
  );
};
export default CriarConta;

const styles = StyleSheet.create({
  acessarContaTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  esqueceuSenha: {
    color: '#752d91',
    fontSize: 18,
    textAlign: 'center',
    margin: 40,
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
    marginLeft: vw(20),
    borderRadius: 40,
  },
  textoAdicionarFoto: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 16,
    fontSize: 18,
  },
  iconeAdicionarFoto: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 16,
    fontSize: 22,
  },
  iconeRadioButton: {
    fontSize: 32,
    color: '#752d91',
    marginTop: vh(5),
  },
  textoTermosUso: {
    fontSize: 16,
    marginTop: vh(5),
    marginLeft: 10,
    paddingRight: 20,
  },
});

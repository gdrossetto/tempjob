import * as React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Icon} from 'native-base';
import InputPicker from '../components/input-picker.components';
import NumberFormat from 'react-number-format';
import {vh, vw} from '../util/Util';
import InputTelefone from '../components/input-telefone.component';

const FotoDiv = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const CriarConta = ({navigation}) => {
  const [radioCheck, setRadioCheck] = React.useState(false);
  const [telefone, setTelefone] = React.useState('');
  return (
    <ScrollView>
      <Logo style={{marginTop: vh(8), marginBottom: vh(4)}} />
      <Text style={styles.acessarContaTexto}>CRIE SUA CONTA</Text>
      <Text style={styles.dadosPessoais}>Dados pessoais</Text>
      <FotoDiv>
        <Image
          style={styles.userPicture}
          source={require('../assets/imgs/user2.png')}
        />
        <Icon style={styles.iconeAdicionarFoto} name="camera"></Icon>
        <Text style={styles.textoAdicionarFoto}>Adicionar foto</Text>
      </FotoDiv>
      <InputTexto style={{marginTop: '5%'}} label={'Nome completo'} />

      <InputTelefone
        telefone={telefone}
        changeText={(text) => setTelefone(text)}
        style={{marginTop: '5%'}}
        label={'Telefone'}
      />
      <InputPicker style={{marginTop: '5%'}} label={'Estado'} />
      <InputPicker style={{marginTop: '5%'}} label={'Cidade'} />
      <InputTexto style={{marginTop: '5%'}} label={'E-mail'} />
      <InputPicker style={{marginTop: '5%'}} label={'Vagas de interesse'} />
      <InputPicker />
      <InputPicker />
      <InputTexto style={{marginTop: '5%'}} label={'Senha'} />
      <InputTexto
        style={{marginTop: '5%'}}
        label={'Digite novamente a senha'}
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
          style={{
            fontSize: 32,
            color: '#752d91',

            marginTop: vh(5),
          }}
        />
        <Text
          style={{
            fontSize: 16,
            marginTop: vh(5),
            marginLeft: 10,
            paddingRight: 20,
          }}>
          Estou de acordo com as
          <Text style={{fontWeight: 'bold'}}>
            {' '}
            Políticas de Privacidade
          </Text> e <Text style={{fontWeight: 'bold'}}>Termos de Uso</Text>
        </Text>
      </View>
      <PurpleButton
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
});

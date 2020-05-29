import * as React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import Logo from '../components/logo.component';
import PurpleButton from '../components/purple-button.component';
import WhiteButton from '../components/white-button.component';
import {vh} from '../util/Util';

const TelaInicial = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/imgs/bg2.jpg')}
        style={styles.image}>
        <Logo style={{marginTop: vh(8)}} />
        <PurpleButton
          style={{marginBottom: -vh(2), marginTop: vh(54)}}
          text={'ACESSAR CONTA'}
          handlePress={() => {
            navigation.navigate('Login');
          }}
        />
        <WhiteButton
          handlePress={() => {
            navigation.navigate('CriarConta');
          }}
          text={'CRIAR CONTA'}
        />
      </ImageBackground>
    </View>
  );
};
export default TelaInicial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    height: vh(100),
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

import React from 'react';
import {Dimensions, StyleSheet, Text, View, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraOverlay from '../components/camera-overlay.component';
import {Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {vh, gerarNomeArquivoStorage} from '../util/Util';
import storage from '@react-native-firebase/storage';

const CameraView = ({navigation, route}) => {
  const {documento} = route.params;
  const {vaga} = route.params;
  const {user} = route.params;

  let camera;

  async function takePicture() {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      if (data) {
        uploadFotoTirada(vaga.id, documento, user.email, data.uri);
      }
    }
  }

  function criaReferenciaDocumento(idVaga, nomeDocumento, emailUsuario) {
    return storage().ref(
      `${idVaga}/${emailUsuario}/${nomeDocumento}/${gerarNomeArquivoStorage(
        8,
      )}`,
    );
  }

  function uploadFotoTirada(idVaga, nomeDocumento, emailUsuario, foto) {
    Alert.alert('Aguarde', 'Sua imagem está sendo enviada...');
    criaReferenciaDocumento(idVaga, nomeDocumento, emailUsuario)
      .putFile(foto)
      .then(() => {
        Alert.alert('Sucesso', 'Sua imagem foi enviada com sucesso!');
        navigation.push('DocumentosObrigatorios', {
          tipoDocumento: documento,
          vaga: vaga,
          user: user,
        });
      })
      .catch((e) => alert(e.code));
  }

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        ref={(ref) => {
          camera = ref;
        }}
        type={RNCamera.Constants.Type.back}
      />
      <CameraOverlay />

      <View style={styles.cameraOverlay}>
        <Icon
          onPress={() => navigation.pop()}
          name="arrow-back"
          style={{color: 'white', marginTop: vh(4)}}></Icon>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: '700',
              color: 'white',
              fontSize: 18,
              marginTop: vh(8),
            }}>
            {documento}
          </Text>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 12}}>
            TIRE UMA FOTO LEGÍVEL
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => takePicture()}
          style={{
            backgroundColor: 'white',
            height: 64,
            width: 64,
            borderRadius: 32,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: vh(65),
          }}>
          <Icon
            style={{
              fontSize: 42,
              textAlign: 'center',
              marginTop: 'auto',
              marginBottom: 'auto',
              color: '#752d91',
            }}
            name="camera"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CameraView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  camera: {
    position: 'absolute',
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  cameraOverlay: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  smartphoneImage: {
    width: 50,
    resizeMode: 'contain',
  },
});

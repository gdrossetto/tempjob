import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Container, Header, Content, Picker, Form, Icon} from 'native-base';

function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}
function vw(percentage) {
  return Dimensions.get('window').width * (percentage / 100);
}
const PageHeader = ({
  userName,
  handlePressMenu,
  hasArrowBack,
  navigationPopHandler,
}) => {
  return (
    <View>
      <View style={styles.purpleLine}></View>
      <View style={styles.headerContainer}>
        {hasArrowBack ? (
          <TouchableOpacity
            style={{borderRadius: 36 / 2}}
            onPress={navigationPopHandler}>
            <Icon style={styles.arrowBack} name="arrow-back"></Icon>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={{borderRadius: 36 / 2}}>
            <Icon style={styles.arrowBackFalse} name="arrow-back"></Icon>
          </TouchableOpacity>
        )}

        <View style={styles.logoContainer}>
          <Logo style={{height: vh(8), width: vw(50), marginTop: vh(3)}} />
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <TouchableOpacity
          style={{borderRadius: 36 / 2}}
          onPress={handlePressMenu}>
          <Icon style={styles.menuIcon} name="menu"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PageHeader;

const styles = StyleSheet.create({
  purpleLine: {
    height: vh(3),
    backgroundColor: '#752d91',
  },
  headerContainer: {
    height: vh(16),
    backgroundColor: '#e8e8e8',
    flexDirection: 'row',
  },
  userName: {
    textAlign: 'center',
    marginTop: 5,
  },
  menuIcon: {
    marginTop: vh(3),
    fontSize: 36,
    marginLeft: vw(10),
  },
  logoContainer: {
    marginLeft: vw(12),
  },
  arrowBack: {
    marginHorizontal: vw(4),
    marginVertical: vh(4),
    fontSize: 28,
  },
  arrowBackFalse: {
    marginHorizontal: vw(4),
    marginVertical: vh(3),
    fontSize: 28,
    color: '#e8e8e8',
  },
});

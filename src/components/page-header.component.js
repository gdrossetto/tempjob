import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../components/logo.component';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import {vw, vh} from '../util/Util';

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
    width: vw(50),
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

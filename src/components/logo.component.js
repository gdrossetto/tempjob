import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';
function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}
const TempJobLogo = styled.Image`
  height: 80px;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = ({style}) => {
  return (
    <TempJobLogo
      style={style}
      source={require('../assets/imgs/tempjoblogo.png')}></TempJobLogo>
  );
};

export default Logo;

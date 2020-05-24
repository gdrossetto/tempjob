import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';

const PurpleButtonContainer = styled.TouchableOpacity`
  background-color: #752d91;
  width: 80%;
  height: 54px;
  margin: auto;
  border-radius: 5px;
`;

const PurpleButtonTitle = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  margin: 12px;
`;

const PurpleButton = ({text, handlePress, style}) => {
  return (
    <PurpleButtonContainer onPress={handlePress} style={style}>
      <PurpleButtonTitle>{text}</PurpleButtonTitle>
    </PurpleButtonContainer>
  );
};

export default PurpleButton;

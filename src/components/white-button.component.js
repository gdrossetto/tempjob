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

const WhiteButtonContainer = styled.TouchableOpacity`
  background-color: #da9bf2;
  width: 80%;
  height: 54px;
  margin: auto;
  border-radius: 5px;
`;

const WhiteButtonTitle = styled.Text`
  color: #752d91;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  margin: 12px;
  margin-top: auto;
  margin-bottom: auto;
`;

const WhiteButton = ({text, handlePress, style, textStyle}) => {
  return (
    <WhiteButtonContainer style={style} onPress={handlePress}>
      <WhiteButtonTitle style={textStyle}>{text}</WhiteButtonTitle>
    </WhiteButtonContainer>
  );
};

export default WhiteButton;

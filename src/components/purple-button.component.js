import * as React from 'react';
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
  margin-top: auto;
  margin-bottom: auto;
`;

const PurpleButton = ({text, handlePress, style, textStyle}) => {
  return (
    <PurpleButtonContainer onPress={handlePress} style={style}>
      <PurpleButtonTitle style={textStyle}>{text}</PurpleButtonTitle>
    </PurpleButtonContainer>
  );
};

export default PurpleButton;

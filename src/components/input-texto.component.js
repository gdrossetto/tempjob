import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';

const FormField = styled.TextInput`
  width: 80%;
  height: 56px;
  border-radius: 5px;
  margin: auto;
  padding: 10px;
`;

const InputTexto = ({style, label, placeholder}) => {
  return (
    <View style={style}>
      <Text
        style={{
          marginLeft: '10%',
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 8,
          color: 'gray',
        }}>
        {label}
      </Text>
      <FormField
        placeholder={placeholder}
        style={{borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

export default InputTexto;

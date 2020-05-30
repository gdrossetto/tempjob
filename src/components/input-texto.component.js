import * as React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const FormField = styled.TextInput`
  width: 80%;
  height: 56px;
  border-radius: 5px;
  margin: auto;
  padding: 10px;
`;

const InputTexto = ({
  style,
  label,
  placeholder,
  changeText,
  senha,
  valor,
  editavel,
}) => {
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
        editable={editavel}
        secureTextEntry={senha}
        placeholder={placeholder}
        style={{borderColor: 'gray', borderWidth: 1}}
        onChangeText={changeText}
        value={valor}
      />
    </View>
  );
};

export default InputTexto;

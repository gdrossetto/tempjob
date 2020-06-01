import * as React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {vw} from '../util/Util';
import {TextInputMask} from 'react-native-masked-text';

/*const FormField = styled.TextInput`
  width: 80%;
  height: 56px;
  border-radius: 5px;
  margin: auto;
  padding: 10px;
`;
*/
const InputCpf = ({style, label, placeholder, changeText, cpf}) => {
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
      <View
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          width: vw(80),
          height: 56,
          borderRadius: 5,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 10,
        }}>
        <TextInputMask
          placeholder={placeholder}
          style
          onChangeText={changeText}
          type={'cpf'}
          value={cpf}
        />
      </View>
    </View>
  );
};

export default InputCpf;

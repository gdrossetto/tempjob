import * as React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {Picker, Form} from 'native-base';
import {vw, vh} from '../util/Util';

const PickerButton = styled.TouchableOpacity`
  width: 80%;
  height: 56px;
  border-radius: 5px;
  margin: auto;
  padding: 10px;
  border-width: 1px;
  border-color: grey;
`;

const InputPickerVagas = ({
  listaCidades,
  data,
  style,
  label,
  mudaValor,
  valor,
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
      <PickerButton>
        <Picker
          onValueChange={mudaValor ? mudaValor : null}
          placeholder="Haha"
          note={false}
          mode="dropdown"
          selectedValue={valor}
          style={{
            width: vw(80),
            height: 40,
            marginBottom: 10,
          }}>
          {data.map((item) => {
            return (
              <Picker.Item
                label={item.nomeVaga ? item.nomeVaga : 'Vaga'}
                value={item.id ? item.id : null}
              />
            );
          })}
        </Picker>
      </PickerButton>
    </View>
  );
};

export default InputPickerVagas;

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

const InputPicker = ({listaCidades, data, style, label, mudaValor, valor}) => {
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
            if (!listaCidades) {
              return (
                <Picker.Item
                  label={item.sigla ? item.sigla : ''}
                  value={item.sigla ? item.sigla : null}
                />
              );
            } else {
              return (
                <Picker.Item
                  label={item.nome ? item.nome : 'Estados'}
                  value={item.nome ? item.nome : null}
                />
              );
            }
          })}
        </Picker>
      </PickerButton>
    </View>
  );
};

export default InputPicker;

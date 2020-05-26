import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';
import {Container, Header, Content, Picker, Form} from 'native-base';

function vh(percentage) {
  return Dimensions.get('window').height * (percentage / 100);
}
function vw(percentage) {
  return Dimensions.get('window').width * (percentage / 100);
}

const PickerButton = styled.TouchableOpacity`
  width: 80%;
  height: 56px;
  border-radius: 5px;
  margin: auto;
  padding: 10px;
  border-width: 1px;
  border-color: grey;
`;

const InputPicker = ({style, label, placeholder}) => {
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
          placeholder="Haha"
          note={false}
          mode="dropdown"
          selectedValue={undefined}
          style={{
            width: vw(80),
            height: 40,
            marginBottom: 10,
          }}>
          <Picker.Item label="ATM Card" value="key1" />
          <Picker.Item label="Wallet" value="key0" />

          <Picker.Item label="Debit Card" value="key2" />
          <Picker.Item label="Credit Card" value="key3" />
          <Picker.Item label="Net Banking" value="key4" />
        </Picker>
      </PickerButton>
    </View>
  );
};

export default InputPicker;

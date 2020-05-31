import * as React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import {vw, vh} from '../util/Util';

const BotaoDetalhes = ({handlePress}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: '#752d91',
        height: 48,
        width: 48,
        borderRadius: 5,
      }}>
      <Icon
        name="eye"
        style={{
          color: 'white',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}></Icon>
    </TouchableOpacity>
  );
};
export default BotaoDetalhes;

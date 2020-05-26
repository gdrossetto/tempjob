import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Logo from '../components/logo.component';
import InputTexto from '../components/input-texto.component';
import PurpleButton from '../components/purple-button.component';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Container, Header, Content, Picker, Form, Icon} from 'native-base';
import PageHeader from '../components/page-header.component';

const VagasDisponiveis = ({navigation}) => {
  return (
    <View>
      <PageHeader
        handlePressMenu={() => {
          navigation.openDrawer();
        }}
        userName={'Gabriel Rossetto'}
        hasArrowBack={false}
        navigationPopHandler={() => navigation.pop()}
      />
    </View>
  );
};
export default VagasDisponiveis;

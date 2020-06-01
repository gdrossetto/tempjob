import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import VagasDisponiveis from '../pages/vagasDisponiveis';
import DetalhesVaga from '../pages/detalhesVaga';
import DocumentosObrigatorios from '../pages/documentosObrigatorios';
import CameraView from '../pages/cameraView';
import HistoricoDocs from '../pages/historicoDocs';

const VagasStack = createStackNavigator();

const VagasStackNavigator = () => {
  return (
    <VagasStack.Navigator>
      <VagasStack.Screen
        options={{headerShown: false}}
        name="VagasDisponiveis"
        component={VagasDisponiveis}
      />
      <VagasStack.Screen
        options={{headerShown: false}}
        name="DetalhesVaga"
        component={DetalhesVaga}
      />
      <VagasStack.Screen
        options={{headerShown: false}}
        name="DocumentosObrigatorios"
        component={DocumentosObrigatorios}
      />
      <VagasStack.Screen
        options={{headerShown: false}}
        name="HistoricoDocs"
        component={HistoricoDocs}
      />
      <VagasStack.Screen
        options={{headerShown: false}}
        name="Camera"
        component={CameraView}
      />
    </VagasStack.Navigator>
  );
};
export default VagasStackNavigator;

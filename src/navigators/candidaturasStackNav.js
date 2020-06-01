import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import VagasDisponiveis from '../pages/vagasDisponiveis';
import DetalhesVaga from '../pages/detalhesVaga';
import DocumentosObrigatorios from '../pages/documentosObrigatorios';
import CameraView from '../pages/cameraView';
import HistoricoDocs from '../pages/historicoDocs';
import CandidaturaAndamento from '../pages/candidaturaAndamento';

const CandidaturasStack = createStackNavigator();

const CandidaturasStackNavigator = () => {
  return (
    <CandidaturasStack.Navigator>
      <CandidaturasStack.Screen
        options={{headerShown: false}}
        name="Candidaturas"
        component={CandidaturaAndamento}
      />
      <CandidaturasStack.Screen
        options={{headerShown: false}}
        name="DetalhesVaga"
        component={DetalhesVaga}
      />
      <CandidaturasStack.Screen
        options={{headerShown: false}}
        name="DocumentosObrigatorios"
        component={DocumentosObrigatorios}
      />
      <CandidaturasStack.Screen
        options={{headerShown: false}}
        name="HistoricoDocs"
        component={HistoricoDocs}
      />
      <CandidaturasStack.Screen
        options={{headerShown: false}}
        name="Camera"
        component={CameraView}
      />
    </CandidaturasStack.Navigator>
  );
};
export default CandidaturasStackNavigator;

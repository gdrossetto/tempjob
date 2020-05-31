import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SuaConta from '../pages/suaConta';
import CameraViewAlteraPerfil from '../pages/cameraViewAlteraPerfil';

const PerfilStack = createStackNavigator();

const PerfilStackNavigator = () => {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen
        options={{headerShown: false}}
        name="SuaConta"
        component={SuaConta}
      />
      <PerfilStack.Screen
        options={{headerShown: false}}
        name="AlterarFotoPerfil"
        component={CameraViewAlteraPerfil}
      />
    </PerfilStack.Navigator>
  );
};
export default PerfilStackNavigator;

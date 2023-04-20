import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Curriculo from './src/pages/Curriculo';
import Formacao from './src/pages/Formacao';
import Objetivo from './src/pages/Objetivo';
import Experiencia from './src/pages/Experiencia';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Curriculo"component={Curriculo}/>
        <Stack.Screen name="Formacao"component={Formacao}/>
        <Stack.Screen name="Objetivo"component={Objetivo}/>
        <Stack.Screen name="Experiencia"component={Experiencia}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
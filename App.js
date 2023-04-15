import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Curriculo from './src/pages/Curriculo';
import Formacao from './src/pages/Formacao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Curriculo"component={Curriculo}/>
        <Stack.Screen name="Formacao"component={Formacao}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
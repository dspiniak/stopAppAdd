import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BreatheScreen from './src/screens/BreatheScreen';
import ConfigureScreen from './src/screens/ConfigureScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Breathe">
        <Stack.Screen name="Breathe" component={BreatheScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Configure" component={ConfigureScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

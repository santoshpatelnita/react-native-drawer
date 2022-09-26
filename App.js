import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Mydrawer from './Component/Mydrawer';
import Tabone from './Component/Tabone';

function App() {
  return (
  <NavigationContainer>

    <Mydrawer/>
  </NavigationContainer>
  )
}

export default App
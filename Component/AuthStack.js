import React from 'react'
import { Text } from 'react-native';
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

const AuthStack = () => {
  
  return (
    <Text>Hello</Text>
  //   <NavigationContainer>
  //   <Drawer.Navigator>
  //   <Drawer.Screen
  //   name="HomeScreen"
  //   component={HomeScreen}
  //   />
  // </Drawer.Navigator>
  //   </NavigationContainer>
  )
}

export default AuthStack
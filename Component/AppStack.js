import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login_page from './Login_page';
import TransPortDetail from './TransPortDetail';
import Home from './Home';
import Login_page from './Login_page';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false}}>
      <Stack.Screen
      name="TransPortDetail"
      component={Login_page}/>
      <Stack.Screen
      name="Home"
      component={Home}/>
      <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      />

     </Stack.Navigator>
     
  )
}

export default AppStack
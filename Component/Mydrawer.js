import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Rahul from './Rahul';
import Tabone from './Tabone';
import About from './About';
import Setting from './Setting';
import { LogBox } from 'react-native';

const Drawer = createDrawerNavigator();

const Mydrawer = () => {
    LogBox.ignoreLogs(['Sending']);
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Tabone} options={{headerShown:false}}/>
    <Drawer.Screen name="Rahul" component={Rahul} options={{headerShown:false}}/>
    <Drawer.Screen name="About" component={About} options={{headerShown:false}}/>
    {/* <Drawer.Screen name="Setting" component={Setting} options={{headerShown:false}}/> */}
  </Drawer.Navigator>
  )
}

export default Mydrawer
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStack from './AppStack'
import TransPortDetail from './TransPortDetail'
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();
const Tabone = () => {
  return (
    <Tab.Navigator>
          <Tab.Screen name="AppStack" component={AppStack} options={{headerShown:false}}/>
          <Tab.Screen name="TransPortDetail" component={TransPortDetail} options={{headerShown:false}}/>
          <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>

        
          {/* <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/> */}
        </Tab.Navigator>
  )
}

export default Tabone
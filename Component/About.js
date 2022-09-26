import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

function About() {
    const navigation=useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Hello I am About Drawer</Text>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Text>toggleDrawer</Text>

      </TouchableOpacity>
  
    
  </View>
  )
}

export default About
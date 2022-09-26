import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from './Home'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection:'column',alignItems:'center', marginTop:300}}>
      <Text style={{backgroundColor: 'skyblue',fontSize:25, fontWeight:'500' }}> HomeScreen Testing</Text>
     <TouchableOpacity onPress={()=>{
      navigation.goBack('Home')}} style={{marginTop:20, borderRadius:20}}><Text style={{backgroundColor: 'skyblue',fontSize:25, fontWeight:'500',color:'#ffff', }}>GO BACK</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen;
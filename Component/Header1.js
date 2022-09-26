import React from 'react';
import TransPortDetail from './TransPortDetail';
import { NavigationContainer, Navigation, useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ImageComponent, Button, TouchableOpacity } from 'react-native';
const Header1 = (props) => {
  console.log("props Data ---->>", props)
  // const [data1,set]
  // const {Navigation}=useNavigation();
  return (
    <View>
      
      <View style={{ backgroundColor: `#F9FAFE` }}>
        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: `#8C8896`, fontFamily: 'arial' }}>Academice Year: </Text>
          <Text style={{ color: `#0F2641`, fontSize: 20, }}>2021-2022</Text>
        </View>
      </View>
    </View>

  )
}

export default Header1;

const styles = StyleSheet.create({
  header: {
    backgroundColor: `#194880`,
    height: 90,
    width: 390,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center'
    
    // justifyContent: 'space-between',

  },
  header_text: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'arial',
    // marginTop: 45,
    // marginTop:50,
  }
})
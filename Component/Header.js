import React from 'react';
import { StyleSheet, View, Text, Image,} from 'react-native';
// const navigation = navigation();

function Header(navigation) {
  return (
    <View style={styles.header}>
          <View style={{flexDirection:'row', marginTop:40, padding:10}}>
          <Image onPress={()=>{
          navigation.navigate("Home")
             }} source={require('../Assets/Images/back.png')}/> 
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}> Transport</Text>
          </View>
         
        {/* <Text style={{}}></Text> */}
      </View>
  )
};
const styles = StyleSheet.create({
    header: {
      width: 390,
      height: 90,
      backgroundColor: `#194880`,
      // flexDirection: 'row',
      // alignItems:"baseline"
    },})

export default Header
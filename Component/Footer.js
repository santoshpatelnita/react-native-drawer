import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,ImageBackground} from 'react-native';

function Footer() {
  return (
    <View style={{marginTop:10,}}>
        <ImageBackground style={styles.map} source={require('../Assets/Images/mapImage.png')}/>
        <View style={{position:'absolute', alignSelf:'center',marginTop:350}}>
            <TouchableOpacity style={{
              width:343,
              height:43,
              backgroundColor: `#32C0F6`,
              borderRadius:5,

            }}>
              <Text style={{  color: 'white', textAlign:'center',fontFamily:'arial',fontSize:18,fontWeight:'bold',marginTop:10 }}>LIVE TRACKING</Text>
            </TouchableOpacity>
            </View>
      </View>
    
  )
};
const styles= StyleSheet.create({
    map:{
        height:450,
      },
    

})

export default Footer
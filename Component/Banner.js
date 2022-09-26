import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Banner = (props) => {
  return (
  <View style={{backgroundColor:`#F9FAFE`}}>
        <View style={styles.bannerOne}>
            <View style={{flexDirection:'row', justifyContent:'space-between',padding:15}}>
                <Text style={{color:`#194880`,fontWeight:'bold',fontSize:18}}>{props.tittle}</Text>
                <Text sytle={{color:`#0F2641`,fontSize:20}}>11:05AM</Text>
                
            </View>
            <View style={{marginLeft:20,marginRight:20,marginTop:10}}>
            <Text style={{color:`#8C8896`,fontSize:15}}>{props.content}</Text>
            </View>
            <View>
                <Text style={{marginLeft:20,marginRight:20,marginTop:10, fontSize:18, color:`#0F2641`}} >Suresh Pandey</Text>
            </View>

        </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
    bannerOne:{
        marginTop:10,
        marginRight:16,
        marginLeft:20,
        height:132,
        width:355,
        backgroundColor:'white',
        borderRadius:10,
    }


})

export default Banner
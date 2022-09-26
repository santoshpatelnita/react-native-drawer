import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';


// const contactDetail = (props) => {
//   return (
//     <View style={{justifyContent:'center'}}>
//       <Text style={{fontSize:20, color:'black',}}>9999999999</Text>
//     </View>
    
//   )
// }


function Vehicle_detail(props) {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container_two}>
        <View style={styles.view_two}>
          <Text style={styles.text_two}>{props.details}</Text>
        </View>
        <View style={styles.view_three}>
          <View style={{ flexDirection: 'row', marginLeft: 30, }}>
            <Image source={require('../Assets/Images/back_button.png')} />
            <View style={{ flexDirection: 'column', marginLeft: 5 }}>
              <Text style={{ color: `#194880` ,fontWeight:'bold' }}>{props.route}</Text>
              <Text style={{ color: `#8C8896`, fontFamily: 'arial' }}>{props.address}</Text>

            </View>
          </View>
          <View style={{ flexDirection: 'row', marginRight: 25, }}>
            <Image source={require('../Assets/Images/clockRed.png')} />
            <Text style={{ color: `#194880`, fontWeight: 'bold' }}>{props.time}</Text>
          </View>
        </View>
        <View style={styles.view_four}>
          <View>
            <Text style={{
              color: `#32C0F6`, fontFamily: 'arial',
              fontWeight: 'bold', fontSize: 16
            }}>{props.number}</Text>
            <Text style={{ color: `#8C8896` }}>{props.vehicle_name}</Text>
          </View >
          <View style={{ marginRight: 15 }}>
            <TouchableOpacity style={{
              elevation: 8,
              backgroundColor: `#32C0F6`,
              borderRadius: 20,
            }}>
              <Text style={{ fontSize: 16, paddingHorizontal: 10, paddingVertical: 7, color: 'white' }}>Contact Details</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
  )
};
const styles= StyleSheet.create({
    container_two: {
        height: 154,
        backgroundColor: 'white',
        // borderBottomWidth: 30,
    
    
      },
      view_two: {
        height: 45,
        width: 340,
        marginLeft: 25,
        // marginRight:25,
        borderBottomColor: `#d3d3d3`,
        borderBottomWidth: 1,
      },
      text_two: {
        // marginLeft: 25,
        fontFamily: 'arial',
        fontWeight: 'bold',
        color: `#194880`,
        marginTop: 16,
        fontSize: 16,
      },
      view_three: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
      },
      view_four: {
        marginTop: 15,
        marginLeft: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    
      },
})

export default Vehicle_detail
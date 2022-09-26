import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Rahul() {
  const navigation = useNavigation();
  return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Text>hellooooooo</Text>

</TouchableOpacity>
    </View>
  )
}

export default Rahul
import { View, ScrollView, StyleSheet, TouchableOpacity, Image, Text, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import Banner from './Banner';
import Header1 from './Header1';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Login_page from './Login_page';

const Home = () => {
  const [getValue, setGetValue] = useState('')
  const [getEmail, setGetEmail] = useState('')
  const navigation = useNavigation();

  AsyncStorage.getItem('name').then(
    (value) =>
      setGetValue(value)
  );

  AsyncStorage.getItem('email').then(
    (value) =>
      setGetEmail(value)
  );

  return (
    <>
      <View style={styles.header}>
        <View style={{flexDirection:'row',marginTop:40, padding:10}}>

          <TouchableOpacity 
            onPress={() => {
              navigation.goBack('Login_page')
            }}>
            <Image source={require('../Assets/Images/back.png')}/>
          </TouchableOpacity>
          <Text style={{ color: '#FFF', fontWeight: '600', fontSize: 18, marginLeft:10 }}>Home</Text>
        </View>
      </View>

      <Text style={{ justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginTop: 30, marginLeft: 20 }}>{getValue}</Text>
      <Text style={{ justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginLeft: 20 }}>{getEmail}</Text>

      <View >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen')
          }}
        ><Text style={{ backgroundColor: 'skyblue', fontSize: 25, fontWeight: '500', color: '#ffff', alignSelf: 'center', }}>click Me</Text></TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#194880',
    height: 90,
    // width: 390,
    flexDirection: 'row',


    // justifyContent: 'space-between',

  },
  header_text: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'arial',
  }
})

export default Home;
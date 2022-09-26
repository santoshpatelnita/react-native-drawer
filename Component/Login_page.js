import { StyleSheet, View, Text, Image, TextInput, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AsyncStorage } from 'react-native';
import Home from './Home';

const Login_page = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigation = useNavigation()

  const saveData = () => {
    if (name) {
      AsyncStorage.setItem('name', name);
      AsyncStorage.setItem('email', email);
      setName('');
      setEmail('');
      // alert('Data Saved');
      navigation.navigate('Home');
    } 
    // else {
    //   alert('Please fill data')
    // }
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection:'row', marginTop:50, padding:20}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
           <Image style={{borderRadius:80,height:50, width:50}} source={require('../Assets/Images/rahul.jpg')}/>
          </TouchableOpacity>
        <Text style={styles.header_text}>Rahul Anand </Text>
        </View>
      </View>
      <View style={styles.image_container}>
        <Image style={styles.image} source={require('../Assets/Images/schoolLogo.png')} />
        <Text>STUDY WELL PUBLIC SCHOOL</Text>
        <Text style={{ fontSize: 10, color: `#a9a9a9` }}>SITAPUR UTTAR PRADESH</Text>
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
          value={name}
          onChangeText={(e) => {
            setName(e)
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={(value) => {
            setEmail(value)
          }}
        />
        <Text style={{ textAlign: 'right', marginRight: 10 }}>forget password</Text>

      </SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => saveData()}>
        <Text style={styles.button_text}>SAVE DATA</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
      style={styles.button}
      onPress={()=> getData() }>
      <Text style={styles.button_text}>GET DATA</Text>
        </TouchableOpacity> */}
      {/* <Text style={styles.textStyle}> {getValue} </Text>
        <Text>{getEmail}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header_text: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    padding:10,
  },
  dummy_text: {
    marginTop: 20,
    fontSize: 14,
  },
  image_container: {
    alignItems: 'center',
    marginTop: 50,

  },
  image: {
    width: 100,
    height: 100,
    // transform 
  },
  header: {
    width: 390,
    height: 182,
    backgroundColor: `#194880`,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // flexDirection: 'row'
  },
  input: {
    height: 40,
    width: 370,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: 138,
    height: 48,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: `#00B2F4`,
    alignSelf: 'center',
    marginTop: 20,
  },

  button_text: {
    alignSelf: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
})

export default Login_page;
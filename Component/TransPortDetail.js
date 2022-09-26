import React from 'react';
import Header from './Header'
import Vehicle_detail from './Vehicle_detail';
import Footer from './Footer';
import { ScrollView, View } from 'react-native';

function TransPortDetail(props) {
  return (
    <View>
      <Header/>
      <ScrollView>
      <Vehicle_detail  details="Pick Up Details" route="Route 17"
      address="Cleo County" time="7:30AM" number="UP 16 EQ 1617"
      vehicle_name="Bharat Benz"
      />

      <Vehicle_detail  details="Drop Up Details" route="Route 13"
      address="Noida Sector 27" time="2:30AM" number="UP 16 EQ 1227"
      vehicle_name="Mazda"/>
      <Footer/>
      </ScrollView>
    </View >

  )
}

export default TransPortDetail
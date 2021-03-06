import React from 'react';
import Tomatoes1 from './assets/Tomatoes1.jpg';
import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';

const App = () => {
  return (
    <View>

    <Image
    style={{ width: 420, height: 300, resizeMode: 'cover', position: 'relative' }}
    source={require("./assets/Tomatoes1.jpg")}/>

    <View style={{ position: 'absolute', top: 60, paddingLeft: 10, paddingRight: 10, width: '100%' }}>
    <Text style={{ color: '#fff', textAlign: 'right', fontWeight: 'bold', right: 15, bottom: 3, fontSize: 18 }}>Icon</Text>

    <View
    style={{ flexDirection: 'row', marginBottom: 30, borderRadius: 10, backgroundColor: '#fff', justifyContent: 'space-between', paddingTop: 7, paddingBottom: 7, paddingLeft: 5, paddingRight: 5 }}>
    <Text style={{ marginRight: 10, fontSize: 18, color: 'rgb(140, 140, 134)', fontWeight: 'bold' }}>Icon</Text>
    <TextInput style={{ right: 60, fontSize: 16 }} placeholder="Search for Product" type="text" />
    <Text style={{ marginLeft: 50, fontSize: 18, fontWeight: 'bold', color: 'rgb(140, 140, 134)' }}>Icon</Text>
    </View>

    <Text style={{ textAlign: 'center', fontSize: 35, fontWeight: '900', color: '#fff', marginBottom: 30 }}>VONS</Text>
    <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center'}}>Welcome Back, Loist!</Text>
    </View>

    <View style={{ paddingLeft: 15, paddingTop: 15, paddingBottom: 15, position: 'relative', borderBottomWidth: 25, borderColor: '#dcdcdc' }}>
     <Text style={{ marginBottom: 10, color: '#686868', fontWeight: 'bold' }}>Reserve Delivery Time</Text>
     <Text style={{ color: '#686868', fontWeight: 'bold' }}>Next Available: Today, 5 PM - 7 PM</Text>
     <Text style={{ position: 'absolute', padding: 10, width: 120, textAlign: 'center',  marginLeft: 280, top: 20, backgroundColor: 'red', color: '#fff' }}>SELECT NOW</Text>
    </View>

    <View style={{ marginLeft: 8, paddingTop: 30, paddingBottom: 30, position: 'relative'  }}>
    <Text style={{ fontWeight: 'bold', color: '#686868', marginBottom: 10 }}>Free Delivery</Text>
    <Text style={{ color: '#686868' }}>When you purchase 5 items width your</Text>
    <Text style={{ color: '#686868', marginBottom: 7}}>order of $99 or more</Text>
    <Text style={{ color: 'red', textDecorationLine: 'underline', fontWeight: 'bold' }}>Select Items Now</Text>
    <Image style={{ width: 100, position: 'absolute', left: 290, height: 130 }} source={require('./assets/meat.jpg')} />
    </View>

    <View style={{ backgroundColor: '#dcdcdc', paddingTop: 10, paddingBottom: 10, paddingLeft: 8, flexDirection: 'row' }}>
    <Text style={{ fontSize: 20, color: '#686868', marginRight: 15 }}>Popular Items</Text>
    <Text style={{ color: 'red', top: 5, fontWeight: 'bold', textDecorationLine: 'underline' }}>View All</Text>
    </View>

    <View style={{ flexDirection: 'row' }}>

     <View style={{ borderRightWidth: 10, borderColor: '#dcdcdc', width: 220, height: 200, alignItems: 'center', position: 'relative' }}>
     <Text style={{ color: 'red', fontWeight: '900', fontSize: 20, borderRadius: 20, marginLeft: -150, top: 20 }}>U</Text>
     <Image style={{ width: 70, height: 100 }} source={require('./assets/chicken1.png')} />
     <Text style={{ top: 20, fontWeight: 'bold', color: '#686868' }}>Signature farms chicken</Text>
     <Text style={{ top: 20, color: '#686868', fontWeight: 'bold' }}>Breast Boneless Skinless</Text>
     <Text style={{ top: 20, color: '#686868', fontWeight: 'bold' }}>Sea salmon big catch ocean</Text>
      </View>

      <View style={{ alignItems: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 10, position: 'relative' }}>
       <Text style={{ right: 50, color: 'red', fontWeight: '900', fontSize: 20 }}>U</Text>
       <Image style={{ width: 100, height: 100, left: 50 }} source={require('./assets/eggs.png')} />
       <Text style={{ top: 20, color: '#686868', color: '#686868', fontWeight: 'bold' }}>Lucern farm eggs</Text>
       <Text style={{ top: 20, color: '#686868', fontWeight: 'bold' }}>Large Grad AA farm</Text>
    </View>
    </View>

    </View>
    );
};

const styles = StyleSheet.create({});

export default App;

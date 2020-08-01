import React from 'react';
import Tomatoes1 from './assets/Tomatoes1.jpg';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View>

    <Image
    style={{ width: 420, height: 300, resizeMode: 'cover', position: 'relative' }}
    source={require("./assets/Tomatoes1.jpg")}/>

    <View style={{ position: 'absolute', top: 60, paddingLeft: 10, paddingRight: 10, width: '100%' }}>
    <Text style={{ color: '#fff', textAlign: 'right', fontWeight: 'bold', right: 15, bottom: 3 }}>Icon</Text>

    <View
    style={{ flexDirection: 'row', borderRadius: 10, backgroundColor: '#fff', justifyContent: 'space-between', paddingTop: 7, paddingBottom: 7, paddingLeft: 5, paddingRight: 5 }}>
    <Text style={{ marginRight: 10, fontSize: 18, color: 'rgb(140, 140, 134)', fontWeight: 'bold' }}>Icon</Text>
    <TextInput style={{ right: 60, fontSize: 16 }} placeholder="Search for Product" type="text" />
    <Text style={{ marginLeft: 50, fontSize: 18, fontWeight: 'bold', color: 'rgb(140, 140, 134)' }}>Icon</Text>
    </View>

    <Text>VONS</Text>
    <Text>Welcome Back, Loist</Text>
    </View>

    </View>
    );
};

const styles = StyleSheet.create({});

export default App;

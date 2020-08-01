import React from 'react';
import Tomatoes1 from './assets/Tomatoes1.jpg';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View>

    <Image
    style={{ width: 420, height: 300, resizeMode: 'cover', position: 'relative' }}
    source={require("./assets/Tomatoes1.jpg")}/>

    <View style={{ position: 'absolute', top: 60, left: 140, width: 250 }}>
    <Text style={{ color: '#fff', textAlign: 'right', fontWeight: 'bold' }}>Icon</Text>

    <View
    style={{ flexDirection: 'row', backgroundColor: '#fff', paddingTop: 7, paddingBottom: 7, paddingLeft: 5 }}>
    <Text style={{ marginRight: 10, color: 'rgb(140, 140, 134)', fontWeight: 'bold' }}>Icon</Text>
    <TextInput placeholder="Search for Product" type="text" />
    <Text>Icon</Text>
    </View>

    <Text>VONS</Text>
    <Text>Welcome Back, Loist</Text>
    </View>

    </View>
    );
};

const styles = StyleSheet.create({});

export default App;

import React from 'react';
import Tomatoes1 from './assets/Tomatoes1.jpg';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.viewStyle1}>

    <Image source={require("./assets/Tomatoes1.jpg")}/>

    <View>
    <TextInput placeholder="Search for Product" type="text" />
    <Text>VONS</Text>
    <Text>Welcome Back, Loist</Text>
    </View>

    </View>
    );
};

const styles = StyleSheet.create({});

export default App;

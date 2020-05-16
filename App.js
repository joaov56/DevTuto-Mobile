import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from "react-native";


import * as Font from 'expo-font';





const App = () => {

  async componentDidMount(){
    await Font.loadAsync({
      bold: require('./assets/fonts/Poppins-Bold.ttf')
    })
  }

  return (

    <ImageBackground source={require('./assets/bg-intro-mobile.png')} style={{ width: '100%', height: '100%', backgroundColor: '#FF6666' }}>


      <View>
        <Text style={{ fontFamily: 'poppins-italic' }}>Learn to code by
          watching others</Text>
      </View>
    </ImageBackground>




  );
};

const styles = StyleSheet.create({
  textoPrinc: {
    textAlign: 'center',
    paddingTop: 40,
    color: "#ffffff",
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: "poppins-bold"

  }
})

export default App;

  
import React, { useState } from 'react';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
import StackNavigator from './routes/HomeStack'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
    // const [fontsLoaded, setFontsLoaded] = useState(false);
  return(

    <StackNavigator/>

    // <View style={styles.home}>
    //     <Text style={styles.text}>
    //         HELLO HOME
    //     </Text>
    //     <ImageBackground source= {require('./assets/images/food')}>
        
    //     </ImageBackground>




    // </View>
    // if (fontsLoaded) {
    //   return (
        // <Navigator />
    //   );
    // } else {
    //   return (
    //     <AppLoading 
    //       startAsync={getFonts} 
    //       onFinish={() => setFontsLoaded(true)} 
    //     />
    //   )
    // }
  )
  }

  const styles=StyleSheet.create({
    home: {
        flex: 0,
        backgroundColor:'red'

    },
    text: {
        fontFamily: 'Roboto-Bold',
        // fontWeight: 'bold',
        paddingLeft: 16,
        fontSize: 32
    }



  })
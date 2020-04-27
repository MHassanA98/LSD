  
import React, { useState } from 'react';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
import Navigator from './routes/Switch'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import 'react-native-gesture-handler'
export default function App() {
    // const [fontsLoaded, setFontsLoaded] = useState(false);
  return(

    <Navigator/>

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
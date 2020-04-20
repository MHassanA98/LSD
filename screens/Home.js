  
import React, { useState } from 'react';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
// import Navigator from './route/NavigDraw'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function Home() {
    // const [fontsLoaded, setFontsLoaded] = useState(false);
  return(

    <View style={styles.home}>
        
        <Text style={styles.text}>
            HELLO HOME
        </Text>
        
        <Image source= {require('../assets/images/Kitchen.jpg')} style={styles.image}>
            
        </Image>

    </View>
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
    },
    image:{
        justifyContent: 'center',
        alignItems: 'center'
    }



  })
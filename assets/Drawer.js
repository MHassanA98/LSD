import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import {SafeAreaView} from 'react-navigation'
import { Directions } from 'react-native-gesture-handler'

export default function CustomerDrawer({navigation}) {

    return(

        <SafeAreaView style={styles.Safe}>
            <View style={styles.HeaderImage}>
                <MIcon style={{paddingLeft:8, color:"#ffffff"}} name="account-circle"  size={100} />
                <Text style={styles.HeaderText}>
                    {/* {navigation.state.routes.map((item)=>console.log(item.key))} */}
                    Hello Admin
                </Text>
            </View>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <FIcon style={{paddingLeft:16, paddingTop:16, color:"#d00f16"}} name='id-card' size={24}/>
                <Text style={{paddingTop:16,paddingLeft:12,color:"black",fontFamily:'Roboto-Regular',fontSize:16}}>
                    {/* {navigation.state.routes.map((item)=>console.log(item.key))} */}
                    Profile
                </Text>
            </TouchableOpacity>

        </SafeAreaView>












    )
    



}

const styles=StyleSheet.create({
    Safe: {
        // alignItems:'center',
        // flexDirection:'column',
        // backgroundColor:'#d00f16'
    },

    HeaderImage: {
        width:'100%',
        height:'50%',
        backgroundColor:"#d00f16",
        justifyContent:'flex-end'
    },

    HeaderText:{
        fontFamily:'Roboto-Bold',
        color:'#ffffff',
        fontSize:24,
        paddingLeft:16,
        paddingBottom:16,
        paddingTop:8
    }



})
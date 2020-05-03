import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity,Dimensions, Alert} from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import {SafeAreaView, NavigationActions} from 'react-navigation'
import firebase from '../assets/DatabaseConfig'
// import { Directions } from 'react-native-gesture-handler'

export default function CustomerDrawer({navigation}) {

    console.log(navigation.dangerouslyGetParent().state)
    // console.log(navigation.state.routes[0].key)
    navigateToScreen = ( route ) =>(
        () => {
        navigation.dispatch(NavigationActions.navigate({routeName:route}));
        // console.log("asdasd")
    })

    function onSignoutPress() {
        console.log("meow")
        Alert.alert(
          "Logout",
          "Are you sure you want to logout?",
          [
            {
              text: "Yes",
              onPress: ()=>{
                firebase.auth().signOut()
                .then(() => {
                  navigation.navigate("LoginStack")
                })
                .catch(function(error) {
                  // console.log(error)
                  alert(error)
                })
              }
            },
            {
              text: "No",
              onPress: ()=> {console.log("NO")},
            }
          ]
          , {cancelable: false}
        )
      }

    return(

        <SafeAreaView style={styles.Safe}>
            <View style={styles.HeaderImage}>
                <MIcon style={styles.MatIcon} name="account-circle"  size={100} />
                <Text style={styles.HeaderText}>
                    {/* {navigation.state.routes.map((item)=>console.log(item.key))} */}
                    Hello Admin
                </Text>
            </View>
            {/* <View > */}
            <TouchableOpacity style={[styles.TouchOpp,{}]} onPress={navigateToScreen('Home')} activeOpacity={0.3}>
                <MCIcon style={styles.FAIcon} name='home' size={24}/>
                <Text style={styles.TextDraw}>
                    {/* {navigation.state.routes.map((item)=>console.log(item.key))} */}
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.TouchOpp,{}]} onPress={navigateToScreen('Profile')} activeOpacity={0.3}>
                <MCIcon style={styles.FAIcon} name='account-box' size={24}/>
                <Text style={styles.TextDraw}>
                    {/* {navigation.state.routes.map((item)=>console.log(item.key))} */}
                    Profile
                    
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.TouchOpp,{}]} onPress={navigateToScreen('Orders')} activeOpacity={0.3}>
                <MCIcon style={styles.FAIcon} name='truck-delivery' size={24}/>
                <Text style={[styles.TextDraw]}>
                    {/* {navigation.state.routes.map((item)=>console.log(item.key))} */}
                    Orders
                    
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.TouchOpp} onPress={navigateToScreen('Customers')} activeOpacity={0.3}>
                <MIcon style={styles.FAIcon} name='people' size={24}/>
                <Text style={styles.TextDraw}>
                    {/* {navigation.state.routes.map((item)=>console.log(item.key))} */}
                    Customers
                    
                </Text>
            </TouchableOpacity>

            <View style={styles.lineStyle}/>

            <TouchableOpacity style={[styles.TouchOpp,{}]} onPress={()=>{}} activeOpacity={0.3}>
                <MIcon style={styles.FAIcon} name='power-settings-new' size={24}/>
                <Text style={styles.TextDraw}>
                    {/* {navigation.state.routes.map((item)=>console.log(item.key))} */}
                    Shutdown
                    
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.TouchOpp,{}]} onPress={onSignoutPress} activeOpacity={0.3}>
            <MCIcon style={[styles.FAIcon,{transform:[{rotate:'180deg'}],paddingLeft:0,paddingRight:16}]} name='logout-variant' size={24}/>
                <Text style={styles.TextDraw}>
                    {/* {navigation.state.routes.map((item)=>console.log(item.key))} */}
                    Sign out
                    
                </Text>
            </TouchableOpacity>
            
            {/* </View> */}
        </SafeAreaView>












    )
    



}

const styles=StyleSheet.create({
    Safe: {
        // alignItems:'center',
        // flexDirection:'column',
        backgroundColor:'#ffffff'
    },

    HeaderImage: {
        width:'100%',
        height:Dimensions.get('window').height/4,
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
    },

    TextDraw:{
        paddingTop:16,
        paddingBottom:16,
        paddingLeft:32,
        color:"black",
        fontFamily:'Roboto-Medium',
        fontSize:16,
        alignSelf:'center',
        // justifyContent:'center'
    },

    MatIcon:{
        paddingLeft:8,
        color:"#ffffff",
        // paddingBottom:16,
    },

    FAIcon:{
        paddingLeft:16,
        paddingTop:12,
        paddingBottom:12,
        color:"#d00f16"
    },

    TouchOpp:{
        // marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        // height:
    },

    lineStyle:{
        borderWidth: 1,
        borderColor:'rgba(00,00,00,0.12)',
        marginTop:Dimensions.get('window').height-570,
        marginBottom:8,
        alignSelf:'center',
        width:Dimensions.get('window').width/1.6
   }

    



})
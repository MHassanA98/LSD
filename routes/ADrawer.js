import React,{useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity,Dimensions, Alert} from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {SafeAreaView, NavigationActions} from 'react-navigation'
import firebase from '../assets/DatabaseConfig'

export default function CustomerDrawer({navigation}) {

    const [screen, setScreen]=useState('Home')

    // console.log(navigation.dangerouslyGetParent().state.routes[1])

    // console.log(navigation.state.routes[1].key)
    navigateToScreen = ( route ) =>(
        () => {
        navigation.dispatch(NavigationActions.navigate({routeName:route}));
        setScreen(route)
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
                    Hello {navigation.getParam('user')}
                </Text>
            </View>

            <TouchableOpacity style={[styles.TouchOpp,(screen==='Home') ? styles.Active: null]} onPress={navigateToScreen('Home')} activeOpacity={0.3}>
                <MCIcon style={[styles.FAIcon,(screen==='Home') ? styles.ActiveLogo: null]} name='home' size={24}/>
                <Text style={[styles.TextDraw,(screen==='Home') ? styles.ActiveText: null]}>
                    {/* {navigation.state.routes.map((item)=>console.log(item.key))} */}
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.TouchOpp,(screen==='Profile') ? styles.Active: null]} onPress={navigateToScreen('Profile')} activeOpacity={0.3}>
                <MCIcon style={[styles.FAIcon,(screen==='Profile') ? styles.ActiveLogo: null]} name='account-box' size={24}/>
                <Text style={[styles.TextDraw,(screen==='Profile') ? styles.ActiveText: null]}>
                    Profile
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.TouchOpp,(screen==='Orders') ? styles.Active: null]} onPress={navigateToScreen('Orders')} activeOpacity={0.3}>
                <MCIcon style={[styles.FAIcon,(screen==='Orders') ? styles.ActiveLogo: null]} name='truck-delivery' size={24}/>
                <Text style={[styles.TextDraw,(screen==='Orders') ? styles.ActiveText: null]}>
                    Orders
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.TouchOpp,(screen==='Customers') ? styles.Active: null]} onPress={navigateToScreen('Customers')} activeOpacity={0.3}>
                <MIcon style={[styles.FAIcon,(screen==='Customers') ? styles.ActiveLogo: null]} name='people' size={24}/>
                <Text style={[styles.TextDraw,(screen==='Customers') ? styles.ActiveText: null]}>
                    Customers
                </Text>
            </TouchableOpacity>

            <View style={styles.lineStyle}/>

            <TouchableOpacity style={[styles.TouchOpp,{}]} onPress={()=>{}} activeOpacity={0.3}>
                <MIcon style={styles.FAIcon} name='power-settings-new' size={24}/>
                <Text style={styles.TextDraw}>
                    Shutdown
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.TouchOpp,{}]} onPress={onSignoutPress} activeOpacity={0.3}>
            <MCIcon style={[styles.FAIcon,{transform:[{rotate:'180deg'}],paddingLeft:0,paddingRight:16}]} name='logout-variant' size={24}/>
                <Text style={styles.TextDraw}>
                    Sign out
                </Text>
            </TouchableOpacity>
            
        </SafeAreaView>

    )

}

const styles=StyleSheet.create({
    Safe: {
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
        color:"rgba(00,00,00,1)",
        fontFamily:'Roboto-Medium',
        fontSize:14,
        alignSelf:'center',
    },

    MatIcon:{
        paddingLeft:8,
        color:"#ffffff",
    },

    FAIcon:{
        paddingLeft:16,
        paddingTop:12,
        paddingBottom:12,
        color:"rgba(00,00,00,0.58)"
    },

    TouchOpp:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },

    lineStyle:{
        borderWidth: 1,
        borderColor:'rgba(00,00,00,0.12)',
        marginTop:Dimensions.get('window').height-560,
        marginBottom:8,
        alignSelf:'center',
        width:Dimensions.get('window').width/1.6
   },

   Active:{
       backgroundColor:'rgba(208,15,22,0.15)'
     
   },

   ActiveText:{
       color:'#d00f16'
   },

   ActiveLogo:{
       color:'#d00f16'
   }

    



})
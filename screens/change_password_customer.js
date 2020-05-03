import React, { useState } from 'react';
import {Text,View,TextInput,StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
//import Icon from "react-native-vector-icons/FontAwesome" ;
import Icon from "react-native-vector-icons/Feather" ;
import firebase from '../assets/DatabaseConfig';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

//import CustomButton from '../screens/button' for later use 

//brought to you by Shahzil 
//Icons from the Top is missing 
//Back handler has not been added
//Respective Functions have been made to make adding functionality easier 
//Removed touchopacity, because couldn't make that button work. Working on a seperate button module, once done will implement that 
//redesigned, brought to sds screens design and improved by jawad
//functionality added by hasan
//state declaration brought to standard declaration used on other screens


export default function Change_Password({navigation}) {

    //updatePassword
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const repasswordInputHandler = (inputRepassword) => {
        setRepassword(inputRepassword);
    };

    const passwordInputHandler = (inputPassword) => {
        setPassword(inputPassword);
    };

    const handleConfirmPress = () => {
        if (password.length>=8) {
            if (password==repassword) {
                firebase.auth().currentUser.updatePassword(password)
                .then(
                    alert("Password succesfully changed!")
                )
                .catch(function(error) {
                    alert(error)
                }) 
                // console.log("changed")

            }
            else {
                alert("passwords do not match!")
            }
        }
        else {
            alert("Password must be 8 characters or more.")
        }
    }

        //Main Container View//
    return(
        <TouchableWithoutFeedback onPress = {() =>{
            Keyboard.dismiss()
            }}>
            <ScrollView style= {styles.container}>
                
                <View style = {styles.body}>
                    <View style = {styles.iconstyle}>
                        <Icon name = 'key' color = '#d00f16' size = {120} style = {{transform: [{rotateX: '360deg'}], transform: [{rotate : '90deg'}]}} />    
                    </View>
                    <View style = {styles.textbox}>
                        <TextInput style = {{fontSize: 18, marginLeft:15}}
                            secureTextEntry
                            placeholder = 'New Password'
                            onChangeText = {passwordInputHandler}
                            value = {password}
                        />
                    </View>
                    <View style = {styles.textbox}>
                        <TextInput style = {{fontSize: 18, marginLeft:15}}
                            secureTextEntry
                            placeholder = 'Confirm Password'
                            onChangeText = {repasswordInputHandler}
                            value = {repassword}
                        />
                    </View>
                    <View
                        style={{
                        marginTop: "15%",
                        marginBottom: "40%",
                        width: '50%',
                        justifyContent: 'center'
                        }}>
                        <TouchableOpacity
                        onPress={handleConfirmPress}
                        style={styles.Confirmbutton}>
                        <Text style={styles.bigbuttontext}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        // width:'100%',
        backgroundColor:'#e8e8e8', 
        // justifyContent: "center",
        // alignContent: "center",
    },
    body:{
        width:'100%', 
        height: '100%',
        backgroundColor: '#e8e8e8', 
        // backgroundColor: 'yellow', 
        marginTop:50,
        alignItems: 'center',
        justifyContent: "center",
    },
    textbox:{
        marginTop:25,
        width:'80%',
        borderRadius: 6,
        justifyContent:'center',
        borderBottomWidth:0, 
        backgroundColor:'white',
        fontSize: 18
    },
    iconstyle: {
        // marginTop: '10%',
        borderRadius: 180,
        height: '27%',
        width: '40%',
        borderWidth: 6,
        borderColor: '#d00f16',
        // backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center',
      },
      Confirmbutton: {
        padding: '5%',
        // marginVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#d00f16',
        borderRadius: 20,
        width: 200,
        height: 40,
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.9,
        shadowRadius: 6,
        elevation: 2,
        // minHeight: '6%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
      },
      bigbuttontext: {
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: '2%',
    
        // opacity: 1,
      }
})

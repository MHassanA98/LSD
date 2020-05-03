import React, { useState } from 'react';
import {Text,View,TextInput,StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome" ;
import firebase from '../assets/DatabaseConfig';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


export default function Change_Phone({navigation}) {

    //updatePassword
    const [phone, setPhone] = useState("");
    const [rephone, setRephone] = useState("");

    const phoneInputHandler = (inputPhone) => {
        setPhone(inputPhone);
    };

    const rephoneInputHandler = (inputRephone) => {
        setRephone(inputRephone);
    };

    const handleConfirmPress = () => {
        if (phone.length==11) {
            if (phone==rephone) {
                let emailcheck = firebase.auth().currentUser.email
                firebase.database().ref('/Users/'+emailcheck.substr(0,8))
                .update({
                    Phonenumber:phone,
                })
                .then(()=>{
                    alert("Phone number successfully updated")
                })
                .catch(()=>{
                    alert("Please check your internet connection")
                })
                // firebase.auth().currentUser.updatePassword(password)
                // .then(
                //     alert("Password succesfully changed!")
                // )
                // .catch(function(error) {
                //     alert(error)
                // }) 
                // console.log("changed")

            }
            else {
                alert("phone numbers do not match!")
            }
        }
        else {
            alert("Phone number must be 11 characters.")
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
                        <Icon name = 'phone' color = '#d00f16' size = {120} style = {{transform: [{rotateX: '360deg'}], transform: [{rotate : '90deg'}]}} />    
                    </View>
                    <View style = {styles.textbox}>
                        <TextInput style = {{fontSize: 18, marginLeft:15}}
                            keyboardType="numeric"
                            placeholder = 'New Phone Number'
                            onChangeText = {phoneInputHandler}
                            value = {phone}
                        />
                    </View>
                    <View style = {styles.textbox}>
                        <TextInput style = {{fontSize: 18, marginLeft:15}}
                            keyboardType="numeric"
                            placeholder = 'Confirm Phone Number'
                            onChangeText = {rephoneInputHandler}
                            value = {rephone}
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

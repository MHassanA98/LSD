import React from 'react'
import {Text,View,TextInput,StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native'
//import Icon from "react-native-vector-icons/FontAwesome" ;
import Icon from "react-native-vector-icons/Feather" ;

//import CustomButton from '../screens/button' for later use 

//brought to you by Shahzil 
//Icons from the Top is missing 
//Back handler has not been added
//Respective Functions have been made to make adding functionality easier 
//Removed touchopacity, because couldn't make that button work. Working on a seperate button module, once done will implement that 


class Change_Password extends React.Component{
    state = {
        current:"", 
        new:"",
        confirm:""
    }

    change_password_buttonhandler = () => {
        alert(
            `You have pressed change password`
            )
    }
    old_passwordHandler = text => {
    this.setState({
        current: text
        })    
    }
    new_passwordHandler = text => {
        this.setState({
            new: text
            })    
        }
    confirm_passwordHandler = text => {
        this.setState({
            confirm: text
            })    
        }

    render(){
        //Main Container View//
        return(
            <TouchableWithoutFeedback onPress = {() =>{
                Keyboard.dismiss()
              }}>
                <ScrollView style= {styles.container}>
                    
                    {/*Heading Container*/}
                    <View style= {styles.heading}>
                        <Text style = {{marginLeft: 50,fontSize:35, color: 'white'}}> Change Password </Text>
                    </View>
                    
                    {/*Password Change Form*/}
                    <View style = {styles.body}>
                        <View style = {styles.iconstyle}>
                            <Icon name = 'key' color = '#d00f16' size = {120} style = {{transform: [{rotateX: '360deg'}], transform: [{rotate : '90deg'}]}} />    
                        </View>
                        <View style = {styles.textbox}>
                            <TextInput style = {{fontSize: 18, marginLeft:15}}
                                placeholderTextColor = 'black'
                                placeholder = 'Current Password'
                                onChangeText = {this.old_passwordHandler}
                            />
                        </View>
                        <View style = {styles.textbox}>
                            <TextInput style = {{fontSize: 18, marginLeft:15}}
                                placeholderTextColor = 'black'
                                placeholder = 'New Password'
                                onChangeText = {this.new_passwordHandler}
                            />
                        </View>
                        <View style = {styles.textbox}>
                            <TextInput style = {{fontSize: 18, marginLeft:15}}
                                placeholderTextColor = 'black'
                                placeholder = 'Confirm Password'
                                onChangeText = {this.confirm_passwordHandler}
                            />
                        </View>
                        <View
                            style={{
                            marginTop: 20,
                            width: '50%',
                            justifyContent: 'center'
                            }}>
                            <TouchableOpacity
                            onPress={() => alert('Confirmed!')}
                            style={styles.Confirmbutton}>
                            <Text style={styles.bigbuttontext}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                </ScrollView>
                </TouchableWithoutFeedback>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        width:'100%',
        backgroundColor:'#d00f16', 
        alignItems:'center'
    },
    heading: {
        height:'2%', 
        width:'90%', 
        backgroundColor:'#d00f16', 
        marginTop:20
    },
    body:{
        width:'100%', 
        height: '100%',
        backgroundColor: '#e8e8e8', 
        marginTop:50,
        alignItems: 'center'
    },
    textbox:{
        marginTop:30,
        width:'80%',
        justifyContent:'center',
        borderBottomWidth:0, 
        backgroundColor:'white',
        fontSize: 18
    },
    iconstyle: {
        marginTop: 30,
        borderRadius: 180,
        height: 120,
        width: 120,
        backgroundColor: '#e8e8e8',
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

export default Change_Password

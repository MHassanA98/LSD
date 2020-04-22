import React from 'react'
import {Text,View,TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome" ;


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
                <View style= {styles.container}>
                    
                    {/*Heading Container*/}
                    <View style= {styles.heading}>
                        <Text style = {{marginLeft: 50,fontSize:35, color: 'white'}}> Change Password </Text>
                    </View>
                    
                    {/*Password Change Form*/}
                    <View style = {styles.body}>
                        <TextInput style = {styles.textbox}
                            placeholderTextColor = 'black'
                            placeholder = 'Current Password'
                            onChangeText = {this.old_passwordHandler}
                            />
                        <TextInput style = {styles.textbox}
                            placeholderTextColor = 'black'
                            placeholder = 'New Password'
                            onChangeText = {this.new_passwordHandler}
                            />
                        <TextInput style = {styles.textbox}
                            placeholderTextColor = 'black'
                            placeholder = 'Confirm Password'
                            onChangeText = {this.confirm_passwordHandler}
                            />       
                        <View style = {{marginTop:20, width: '50%', justifyContent: "center", marginLeft : 100}}>
                         <Button style = {{marginTop: 35, width: '50%'}} title = "Confirm" color = "#d00f16" onPress = {this.change_password_buttonhandler}/>   
                        </View>
                        </View>
                </View>
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
        marginTop:50
    },
    textbox:{
        marginTop:40,
        marginLeft:35,
        width:'80%',
        justifyContent:'center',
        alignItems: 'center',
        borderBottomWidth:0, 
        backgroundColor:'white',
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
    },
    
})

export default Change_Password

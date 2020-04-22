import React from 'react'
import {Text,View,TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native'

//brought to you by Shahzil 
//Icons from the Top is missing 
//Back handler has not been added
//Respective Functions have been made to make adding functionality easier 


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
                            <TouchableOpacity style={styles.bigbutton} onPress = {this.change_password_buttonhandler}>
                                <View style={styles.loginbutton}> 
                                    <Text style={styles.bigbuttontext}> Confirm </Text>
                                </View>
                            </TouchableOpacity>
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

    bigbuttontext: {
        color: "white",
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        textAlign: "center",
        paddingTop: '2%',
    },
    
    bigbutton: {
        paddingHorizontal: '23%',
        flex: 2,
    },
      loginbutton: {
        marginTop:40, 
        paddingHorizontal: 15,
        backgroundColor: "#d00f16",
        borderRadius: 17,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.9,
        shadowRadius: 6,
        elevation: 2,
        minHeight: '6%',
        textAlign: "center",
      }
})

export default Change_Password
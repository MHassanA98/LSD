import React from 'react'
import {Text,View,StyleSheet, Button} from 'react-native'

//Made by Shahzil 
//Added Button Handlers
//Added states and fetch functions
//Need to add firebase functionality 
//Icons to be added by the space in the fields 
//The change password button will lead to change_password_customer screen 


class Customer_Profile extends React.Component{
    state = {
        username:'',
        phone:'',
        points:'',
        email:''
    }
    
    username_fetch = () => {
        this.setState({
            username: "Username"
            })    
        }
    email_fetch = () => {
        this.setState({
            username: "Email"
            })    
        }
    phone_fetch = () => {
            this.setState({
                phone: "Phone"
                })    
            }
    points_fetch = () => {
        this.setState({
            points: 0
            })    
        }

    change_number_buttonhandler = () => {
        alert(
            `You have pressed change number`
            )
    }
    change_password_buttonhandler = () => {
        alert(
            `You have pressed change password`
            )
    }

    render(){
        
        //Main Container View//
        return(
                <View style= {styles.container}>
                    
                    {/*Heading Container*/}
                    <View style= {styles.heading}>
                        <Text style = {{marginLeft: 50,fontSize:35, color: 'white'}}> Customer Profile </Text>
                    </View>
                    
                    {/*Password Change Form*/}
                    <View style = {styles.body}> 
                        <View style = {styles.textbox}>
                            <Text style= {{fontSize: 18, marginLeft: 40}}>Customer Name</Text>
                        </View>

                        <View style = {styles.textbox}>
                            <Text style= {{fontSize: 18, marginLeft: 40}}>Email</Text>
                        </View>

                        <View style = {styles.textbox}>
                            <Text style= {{fontSize: 18, marginLeft: 40}}>Phone Number</Text>
                        </View>

                        <View style = {styles.textbox}>
                            <Text style= {{fontSize: 18, marginLeft: 40}}>Redemption Points</Text>
                        </View>

                        <View style = {{marginTop:20, width: '50%', justifyContent: "center", marginLeft : 100}}>
                         <Button rounded style = {{marginTop: 35, width: '50%'}} title = "Change Password" color = "#d00f16" onPress = {this.change_password_buttonhandler}/>   
                        </View>
                        <View style = {{marginTop:20, width: '50%', justifyContent: "center", marginLeft : 100}}>
                         <Button rounded style = {{marginTop: 35, width: '50%'}} title = "Change Number" color = "#d00f16" onPress = {this.change_number_buttonhandler}/>   
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
        marginTop:20,
        marginLeft:'10%',
        width:'80%',
        height:'8%',
        justifyContent:'center',
        borderBottomWidth:0, 
        backgroundColor:'white',
        fontFamily: 'Roboto-Bold',
    },
    
})

export default Customer_Profile
import React from 'react'
import {Text,View,StyleSheet, Button, TouchableOpacity} from 'react-native'
import SwitchExample from './switch1.js'
import PickerExample from './PickerExample.js'
import Icon from 'react-native-vector-icons/FontAwesome'


class Checkout extends React.Component{
    
    constructor() {
      super();
      this.state = {
         switch1Value: false,
      }
   }
   toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
      console.log('Switch 1 is: ' + value)
   }

    state = {
        Subtotal:'10',
        Points_discount:'20',
        Delivery_Charges:'10',
        Total:'100'
    }
  
    points_fetch = () => {
        this.setState({
            points: 0
            })    
        }

    render(){
        //Main Container View//
        return(
                <View style= {styles.container}>
                    
                    {/*Heading Container*/}
                    <View style= {styles.heading}>
                        <Text style = {{marginLeft: 80,fontSize:35, color: 'white'}}> Checkout </Text>
                    </View>
                    
                    {/*Main Body*/}
                    <View style = {styles.body}> 
                        <View style = {styles.textbox}>
                        <PickerExample/>
                        </View>

                        <View style = {styles.textbox}>
                        <View style = {styles.write_on_the_edges}>
                                <Text style= {{fontSize: 18, marginLeft: 20}}>Redeem Points</Text>
                                                        <SwitchExample 
                        toggleSwitch1 = {this.toggleSwitch1}
                        switch1Value = {this.state.switch1Value}/>
                            </View>
                        </View>


                        <Text style= {{fontSize: 15, marginLeft: 40, marginTop: 30}}>Total</Text>
                        <View style = {styles.lower_body}>
                            
                           <View style = {styles.write_on_the_edges} >
                                <Text style= {{fontSize: 15, marginLeft: 20, marginTop: 10, marginBottom: 5}}>Subtotal</Text> 
                                <Text style= {{fontSize: 15, marginRight: 20, marginTop: 10, marginBottom: 5}}>Rs. {this.state.Subtotal}</Text>
                            </View>
                            <View style = {styles.write_on_the_edges} >
                                <Text style= {{fontSize: 15, marginLeft: 20,marginBottom: 5}}>Points Discount</Text> 
                                <Text style= {{fontSize: 15, marginRight: 20, marginBottom: 5}}>Rs. {this.state.Points_discount}</Text>
                            </View>
                            <View style = {styles.write_on_the_edges} >
                                <Text style= {{fontSize: 15, marginLeft: 20,marginBottom: 5}}>Delivery Charges</Text> 
                                <Text style= {{fontSize: 15, marginRight: 20,marginBottom: 5}}>Rs. {this.state.Delivery_Charges}</Text>
                            </View>
                            <View style = {styles.write_on_the_edges} >
                                <Text style= {{fontSize: 15, marginLeft: 20, marginTop: 10, marginBottom: 5}}>Total</Text> 
                                <Text style= {{fontSize: 15, marginRight: 20, marginTop: 10, marginBottom: 5}}>Rs. {this.state.Total}</Text>
                            </View>
                        </View>

                        <Text style= {{fontSize: 15, marginLeft: 40, marginTop: 20}}>Payment Method</Text>
                        <View style = {styles.textbox1}>
                        <View style = {styles.write_on_the_edges}>
                                <Text style= {{fontSize: 18, marginLeft: 20}}>{'\u0024'} Cash on Delivery</Text>
                            </View>
                        </View>


                        <View style={styles.bigbutton}>
                          <TouchableOpacity
                            onPress={() => alert('Order Confirmed!')}
                            style={styles.Confirmbutton}>
                            <Text style={styles.bigbuttontext}>Confirm Order</Text>
                          </TouchableOpacity>
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
    lower_body:{
        marginTop:0,
        marginLeft:'10%',
        width:'80%',
        height:'25%',
        justifyContent: 'flex-start',
        borderBottomWidth:0, 
        backgroundColor:'white',
        fontFamily: 'Roboto-Bold',   
    },
    textbox1:{
        marginTop:0,
        marginLeft:'10%',
        width:'80%',
        height:'8%',
        justifyContent:'center',
        borderBottomWidth:0, 
        backgroundColor:'white',
        fontFamily: 'Roboto-Bold',
    },
    Confirmbutton: {
    // padding: 20,
    // paddingBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 20,
    width: 200,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
    minHeight: '5%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigbuttontext: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: '2%',

    // opacity: 1,
  },
  bigbutton: {
    // padding: '50%',
    paddingHorizontal: '23%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
    write_on_the_edges:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }

})

export default Checkout
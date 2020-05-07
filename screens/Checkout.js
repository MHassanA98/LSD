import React,{useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity,Dimensions, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SwitchExample from './switch1.js';
import Category from './PickerList.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-community/picker';
import { NavigationEvents } from 'react-navigation';
import firebase from "../assets/DatabaseConfig"


export default function Checkout({navigation}) {

  const [RedPts,setRedPts]=useState(0)
  const [Total,setTotal]=useState(0)
  const [Subtotal,setSubtotal]=useState(0)
  const [Location,setLocation]=useState("null")
  const [RedPtsStore,setRedPtsStore]=useState(0)
  const [Switch,setSwitch]=useState(false)
  const [Delivery,setDelivery]=useState(20)
  const [Products, setProducts]=useState([])
  const [OutStock,setOutStock]=useState(" ")
  const [AddRedPts,setAddRedPts]=useState()

  const handlePress=async ()=>{

    if (Location=="null"){
      alert("Please choose a location")
      return
    }


    else if (OutStock!=" "){
      let al=  OutStock+" is out of stock"
      Alert.alert("Apologies",al)
      return
    }

    Press2()
    const keys=await AsyncStorage.getAllKeys()
    await AsyncStorage.multiRemove(keys).then(navigation.navigate('Home'))
    
  }

  const Press=()=>{

    Products.forEach((item)=>{
      firebase
      .database()
      .ref(
        '/Inventory/' +
          item.CAT +
          '/' +
          item.SUB +
          '/' +
          item.name
      )
      .update({
        Qty:item.available-item.quantity

      })
      .catch(()=>{Alert.alert("Checkout Failed","Please check your Internet connection")})
  
  
  })

}

const Press2=()=>{

   
    let Email=firebase.auth().currentUser.email.substr(0, 8)

    firebase
        .database()
        .ref('/Orders/' + Email)
        .once('value')
        .then(snapshot => {
          console.log('HERERE');
          
          console.log(snapshot.exists());
          
            
          if (snapshot.exists()){
            ExistsAlert()
          }
          else{
            Press()
            PlaceOrder(Email);

          }

          
        }).catch(()=>{Alert.alert("Checkout Failed","Please check your Internet connection")})
    
  }
  
  
  
  
  
  function ExistsAlert(){
    Alert.alert("Checkout failed", "You already have an order in progress")
  }


  
  function ProdQty(){

    for (let i=0; i<Products.length; i++){

      ProdQtyGet(i)
      if (OutStock!=" ")
      {
        break
      }

  }
}


  function ProdQtyGet(i){

    
    if (Products[i].quantity>Products[i].available){
      setOutStock(Products[i].name)
    }

  }
  
  const PlaceOrder=(Email)=>{

    Products.forEach((item)=>{
      
      delete item.CAT
      delete item.SUB
      delete item.available
    })


    let Hour=new Date().getHours()
    let Min=new Date().getMinutes()
    let time=Hour+":"+Min
    console.log(time)
    firebase.database().ref('/Orders/'+Email).set({
      Subtotal: Subtotal,
      RedPts:RedPts,
      Total:Total,
      Delivery:Delivery,
      Location:Location,
      Time:time,
      OrderStatus: "Confirmed",
      Products: Products

    }).then(()=>{

      if (Switch){

        firebase.database().ref('/Users/'+Email).update({
          Redemptionpoints:0
        })

      }
      else{

        

        firebase.database().ref('/Users/'+Email).once("value").then((snapshot)=>{
          
          setAddRedPts((Total*0.4)+snapshot.child("Redemptionpoints").val())
          
        })
 
      }

      
    }).then(Alert.alert("Checkout Successful!","Your order has been placed."))
    .catch(()=>{Alert.alert("Checkout Failed","Please check your Internet connection")})

  }

  function toggleSwitch1(value) {
 
    setSwitch(value)
    
    console.log('Switch 1 is: ' + value);
    if (value==true)
    {
      
      setRedPts(RedPtsStore)
      setTotal(Total=>Total-RedPtsStore)
    }
    else
    {
      setRedPts(0)
      setTotal(Total=>Total+RedPtsStore)

    }
  };


  async function LoadData() {

    

    let emailcheck = firebase.auth().currentUser.email;
    let RedPoints=0
    mydb = await firebase.database().ref('/Users/' + emailcheck.substr(0, 8))
    .once('value').then(function(snapshot) {
      
      RedPoints= snapshot.child('Redemptionpoints').val()
      setRedPtsStore(RedPoints)

    })

  }

  useEffect(()=>{
    ProdQty()
  },[Products])

  useEffect(()=>{

    let Email=firebase.auth().currentUser.email.substr(0, 8)

       
    firebase.database().ref('/Users/'+Email).update({
          Redemptionpoints:AddRedPts
          
    })
    
  },[AddRedPts])


    return (
      
      
      <View style={styles.container}>
        {/*Heading Container*/}
        
        <NavigationEvents
        onWillFocus={() => 
          {
            setSubtotal(navigation.getParam('Subtotal'))
            setTotal(navigation.getParam('Subtotal')+Delivery)
            setProducts(navigation.getParam('Products'))
            
            LoadData()

          }
        }
        
        />

        {/*Main Body*/}
        <View style={styles.body}>
          <View style={styles.textbox}>
            {/* <Category /> */}
            <Picker
              selectedValue={Location}
              style={[styles.containerpicker]}
              mode={"dropdown"}
              onValueChange={(itemValue) => setLocation(itemValue)}>
              <Picker.Item label="Choose a Location" value="null" />
              <Picker.Item label="M1" value="M1" />
              <Picker.Item label="M2" value="M2" />
              <Picker.Item label="M3" value="M3" />
              <Picker.Item label="M4" value="M4" />
              <Picker.Item label="M5" value="M5" />
              <Picker.Item label="M6" value="M6" />
              <Picker.Item label="M7" value="M7" />
              <Picker.Item label="Female Barrier" value="Female Barrier" />
              <Picker.Item label="SDSB" value="SDSB" />
              <Picker.Item label="SSE" value="SSE" />
              <Picker.Item label="Law Buildling" value="Law Building" />
              <Picker.Item label="Library" value="Library" />
            </Picker>
          </View>

          <View style={styles.textbox2}>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 16, marginLeft: 16, alignSelf:'center',}}>Redeem Points</Text>
              <SwitchExample
                toggleSwitch1={toggleSwitch1}
                switch1Value={Switch}
                REDPTS={RedPtsStore}
              />
            </View>
          </View>

          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 16,
              marginLeft: 16,
              paddingLeft: 8,
              marginTop: 30,
            }}>
            Total Amount
          </Text>
          <View style={[styles.lower_body,{marginTop:4}]}>
            <View style={styles.write_on_the_edges}>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 16,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginRight: 16,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                Rs. {Subtotal}
              </Text>
            </View>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 16, marginLeft: 16, marginBottom: 5, color:!Switch? 'rgba(00,00,00,0.2)': 'black' }}>
                Points Discount
              </Text>
              <Text style={{fontSize: 16, marginRight: 16, marginBottom: 5, color:!Switch? 'rgba(00,00,00,0.2)': 'black'}}>
                Rs. {RedPts}
              </Text>
            </View>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 16, marginLeft: 16, marginBottom: 5}}>
                Delivery Charges
              </Text>
              <Text style={{fontSize: 16, marginRight: 16, marginBottom: 5}}>
                Rs. {Delivery}
              </Text>
            </View>
            
            <View style={styles.lineStyle}/>

            <View style={styles.write_on_the_edges}>
              <Text
                style={{
                  
                  marginLeft: 16,
                  marginTop: 10,
                  marginBottom: 5,
                  fontFamily:"Roboto-Medium",
                  fontSize:20
                }}>
                Total
              </Text>
              <Text
                style={{
                  
                  marginRight: 16,
                  marginTop: 10,
                  marginBottom: 5,
                  fontFamily:"Roboto-Medium",
                  fontSize:20
                }}>
                Rs. {Total}
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              marginLeft: '5%',
              marginTop: 30,
              paddingLeft: 8,
            }}>
            Payment Method
          </Text>

          <View style={[styles.textbox1,{marginTop:4}]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 16,
              }}>
              <Icon name="money" color="#d00f16" size={24} style={{alignSelf:'center'}} />
              <Text style={{fontSize: 16, marginLeft: 16, fontFamily:"Roboto-Regular"}}>
                Cash on Delivery
              </Text>
            </View>
          </View>

          <View style={styles.bigbutton}>
            <TouchableOpacity
              onPress={handlePress}
              style={styles.Confirmbutton}>
              <Text style={styles.bigbuttontext}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  containerpicker: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    width: '98%',
    height: 50,
    elevation: 2,
    marginLeft:8,
    
  },

  container: {
    
    width: '100%',
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    padding: '10%',
    
  },
  heading: {
    height: '2%',
    width: '90%',
    backgroundColor: '#d00f16',
    marginTop: 20,
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8e8e8',
    
    
  },
  textbox: {
    marginTop: 20,
    
    marginLeft: '5%',
    
    width: '90%',
    height: 56,
    elevation: 5,
    borderRadius: 5,
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
  },
  textbox2: {
    marginTop: 20,
    
    marginLeft: '5%',
    
    width: '90%',
    height: 56,
    
    borderRadius: 5,
    
    
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
  },
  lower_body: {
    marginTop: 0,
    
    marginLeft: '5%',
    width: '90%',
    height: 150,
    justifyContent: 'flex-start',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
    borderRadius: 5,
  },
  textbox1: {
    marginTop: 0,
    borderRadius: 5,
    height: 56,
    marginLeft: '5%',
    width: '90%',
    height: '8%',
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
  },
  Confirmbutton: {
    
    
    padding: '5%',
    
    paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 20,
    width: 200,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    
    
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
    
    

    
  },
  bigbutton: {
    paddingHorizontal: '23%',
    
    alignItems: 'center',
    marginTop:"10%"
    
  },
  write_on_the_edges: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  lineStyle:{
    borderWidth: 1,
    borderColor:'rgba(00,00,00,0.05)',
    marginTop:8,
    
    alignSelf:'center',
    width:Dimensions.get('window').width/2
  },
});



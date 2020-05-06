import React,{useState} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity,Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SwitchExample from './switch1.js';
import Category from './PickerList.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-community/picker';
import { NavigationEvents } from 'react-navigation';
import firebase from "../assets/DatabaseConfig"


export default function Checkout({navigation}) {

  // const [state,setState]=useState({
  //   switch1Value: false,
  //   // location: null,
  //   // subtotal: 0,
  //   // RedemptionPoints: 0,
  //   Delivery_Charges: 20,
  //   // Total: 0,
  // })
  const [RedPts,setRedPts]=useState(0)
  const [Total,setTotal]=useState(0)
  const [Subtotal,setSubtotal]=useState(0)
  const [Location,setLocation]=useState("null")
  const [RedPtsStore,setRedPtsStore]=useState(0)
  const [Switch,setSwitch]=useState(false)
  const [Delivery,setDelivery]=useState(20)



  // constructor() {
  //   super();
  //   this.state = {
  //     switch1Value: false,
  //     location: null,
  //     Subtotal: 10,
  //     Points_discount: 20,
  //     Delivery_Charges: 20,
  //     Total: 100,
  //   };
  // }
  function toggleSwitch1(value) {
    // let emailcheck = firebase.auth().currentUser.email;
    // mydb = firebase.database().ref('/Users/' + emailcheck.substr(0, 8));
    // mydb.once('value').then(function(snapshot) {
    //   // let custflag = snapshot.child('Customerflag').val();
    //   // let username = snapshot.child('Username').val();
    //   // if (custflag) {
    //   //   removeData();
    //   //   navigation.navigate('CustomerDrawer', {user: username});
    //   // } else {
    //   //   navigation.navigate('AdminDrawer', {user: username});
    //   // }
    //   let RedPoints=snapshot.child('Redemptionpoints')
      
    // })

    // setState({...state,switch1Value: value});
    setSwitch(value)
    // state.set
    console.log('Switch 1 is: ' + value);
    if (value==true)
    {
      // setState({...state, RedemptionPoints:RedPts})
      setRedPts(RedPtsStore)
      setTotal(Total=>Total-RedPtsStore)
    }
    else
    {
      setRedPts(0)
      setTotal(Total=>Total+RedPtsStore)

    }
  };

  // state = {
  //   Subtotal: '10',
  //   Points_discount: '20',
  //   Delivery_Charges: '10',
  //   Total: '100',
  // };

  function points_fetch () {
    setState({...state,
      points: 0
    });
  };

  // async function getitem(name,Total) {
  //   // console.log("yeqwyriuyweiruwieyriweyriuweri")
  //   console.log("TOTOTOTOOTOTOTOTOTOTOTOTOOTOT", Total)
  //   try {
  //     const item = await AsyncStorage.getItem(name)
  //     console.log("NAME",name)
  //     // const value = await AsyncStorage.getAllKeys()
  //     if(item !== null) {
  //       let myitem = JSON.parse(item)
  //       console.log(myitem)

  //       // let newprod = {
  //       //   name: name,
  //       //   price: parseInt(myitem.price),
  //       //   quantity: parseInt(myitem.quantity),
  //       // };

  //       // console.log(myitem.price+10)
  //       // console.log(myitem.price*myitem.quantity)
  //       // console.log("SUBTOTAL1: ",state.subtotal)
  //       Total=Total+(myitem.price*myitem.quantity)
  //       console.log("SUBTOTA2: ",Subtotal)
  //       console.log("ITEM TOTAL",Total)
  //       let SUB=Total+state.subtotal
  //       console.log("RESULT:    ",SUB)
  //       // setState({...state, subtotal:SUB})
  //       setSubtotal(SUB)
  //       // console.log("TOTAL    ",Total)

  //       // console.log(newprod)

  //       // prodarr.push(newprod)
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     // error reading value
  //   }

  //   // prodarr.push(newprod)
  // }
  // // componentDidMount(){
  // //   console.log("asdasd")
  // //   this.getData()
  // // }

  // async function getData() {
  //   // console.log("!@#$%^&         ",product)
  //   setSubtotal(0)
  //   try {
  //     const value = await AsyncStorage.getAllKeys()
  //     console.log("VALVALVLAVLAVLLVALAV", value)
  //     if(value !== null) {
  //       // console.log("VALLL",value)
  //       // let prodarr  = []
  //       let Total=0
  //       value.forEach(function(name) {
  //         // let newprod = getitem(name, prodarr)
  //         console.log("asdasdasd",name)
  //         getitem(name, Total)
  //         // .then(()=>{
  //         //   // console.log("1PROD",prodarr)
  //         //   // console.log("PRODDDDD",product)
  //         //   // setProduct(prodarr)   

  //         // })
          
         
          
  //         // console.log(prodarr)

  //         // prodarr.push(newprod)

  //         // console.log(name)
  //       })

  //       console.log("VALVALVLAVLAVLLVALAV", Total)


  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // }

  function LoadData() {

    // firebase.database().ref('Users').orderByChild('Customerflag').equalTo(false)

    let emailcheck = firebase.auth().currentUser.email;
    let RedPoints=0
    mydb =firebase.database().ref('/Users/' + emailcheck.substr(0, 8))
    .once('value').then(async function(snapshot) {
      // let custflag = snapshot.child('Customerflag').val();
      // let username = snapshot.child('Username').val();
      // if (custflag) {
      //   removeData();
      //   navigation.navigate('CustomerDrawer', {user: username});
      // } else {
      //   navigation.navigate('AdminDrawer', {user: username});
      // }
      RedPoints= snapshot.child('Redemptionpoints').val()
      setRedPtsStore(RedPoints)

      // console.log(RedPoints)
      
    })

    // setRedPts(RedPoints)

    // console.log("UEUEAUEUE",RedPoints)
    // let NEW=Object.entries(state)
    //   console.log(NEW)
    //   // NEW[2][1]=navigation.getParam("Subtotal")
    //   NEW[3][1]=RedPoints
    //   // NEW[5][1]=NEW[2][1]+NEW[4][1]
    // let STATA=Object.fromEntries(NEW)
    // console.log(STATA)
    // setState(STATA)
    // console.log(state)

    // return RedPoints
    // setState


    // setState({...state,subtotal:navigation.getParam('Subtotal'), RedemptionPoints:RedPoints, Total:navigation.getParam('Subtotal')+state.Delivery_Charges})

    
  }



  // render() {
    //Main Container View//
    return (
      
      
      <View style={styles.container}>
        {/*Heading Container*/}
        
        <NavigationEvents
        onWillFocus={() => 
          {
            setSubtotal(navigation.getParam('Subtotal'))
            setTotal(navigation.getParam('Subtotal')+Delivery)
            // setState({...state,subtotal:navigation.getParam('Subtotal'), Total:navigation.getParam('Subtotal')+state.Delivery_Charges})
            LoadData()
            // setState({...state,RedemptionPoints:Red})

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
              <Text style={{fontSize: 16, marginLeft: 16, marginBottom: 5, color:Switch? 'rgba(00,00,00,0.5)': 'black' }}>
                Points Discount
              </Text>
              <Text style={{fontSize: 16, marginRight: 16, marginBottom: 5}}>
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
                  // fontSize: 16,
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
                  // fontSize: 16,
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
              onPress={() => alert('Order Confirmed!')}
              style={styles.Confirmbutton}>
              <Text style={styles.bigbuttontext}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
// }

const styles = StyleSheet.create({
  containerpicker: {
    flex: 1,
    // paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    width: '98%',
    height: 50,
    elevation: 2,
    marginLeft:8,
    // color:"red"
  },

  container: {
    // flex: 1,
    width: '100%',
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    padding: '10%',
    // marginVertical: 10,
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
    // marginVertical: 10,
    // marginTop: 50,
  },
  textbox: {
    marginTop: 20,
    // width: '72%',
    marginLeft: '5%',
    // paddingBottom: 10,
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
    // width: '72%',
    marginLeft: '5%',
    // paddingBottom: 10,
    width: '90%',
    height: 56,
    // elevation: 5,
    borderRadius: 5,
    // shadowColor: 'darkgrey',
    // shadowOpacity: 20,
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
  },
  lower_body: {
    marginTop: 0,
    // padding: 10,
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
    // padding: 20,
    // paddingBottom: 20,
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
    // elevation: 5,
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
    // paddingTop: '2%',
    // paddingBottom:'2%'

    // opacity: 1,
  },
  bigbutton: {
    paddingHorizontal: '23%',
    // flex: 2,
    alignItems: 'center',
    marginTop:"30%"
    // justifyContent: 'flex-end',
  },
  write_on_the_edges: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  lineStyle:{
    borderWidth: 1,
    borderColor:'rgba(00,00,00,0.05)',
    marginTop:8,
    // marginBottom:8,
    alignSelf:'center',
    width:Dimensions.get('window').width/2
  },
});

// export default Checkout;

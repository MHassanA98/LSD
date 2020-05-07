import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import newbiryani from '../assets/images/newbiryani.png';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// import DropDownItem from "react-native-drop-down-item";
// import {
//   TouchableHighlight,
//   BorderlessButton,
// } from "react-native-gesture-handler"

export default function Shopping({navigation}) {
  const [product, setProduct] = useState([]);
  // const [product, setProduct] = useState([
  //   {name: 'pencil', price: '40', quantity: 0},
  //   {name: 'ruler', price: '50', quantity: 0},
  //   {name: 'sharpener', price: '5', quantity: 0},
  // ]);
  const [total, setTotal] = useState(0);
  //   const onAdd = () => setProd;
  // const onMin = () => setProduct(prev => prev - 1)
  const handlePress = () => {
    if (product.length==0){
      alert('Shopping cart is empty')
      return
    }
    navigation.navigate('Checkout',{Subtotal: total, Products: product});
  };
  
  async function qtyless(name, price, quantity) {
    try {
      await AsyncStorage.setItem(
        name,
        JSON.stringify({
          price: parseInt(price),
          quantity: parseInt(quantity) - 1,
        }),
      );
      // await AsyncStorage.removeItem("@storage_Key")
    } catch (e) {
      // saving error
    }
  }

  async function qtymore(name, price, quantity) {
    try {
      await AsyncStorage.setItem(
        name,
        JSON.stringify({
          price: parseInt(price),
          quantity: parseInt(quantity) + 1,
        }),
      );
      // await AsyncStorage.removeItem("@storage_Key")
    } catch (e) {
      // saving error
    }
  }

  // function onMin(item) {
  //   console.log(item);
  //   if (item.quantity != 0) {
  //     // item.quantity = item.quantity-1
  //     qtyless(item.name, item.price, item.quantity);
  //     getData();
  //   }
  // }

  // function onPlus(item) {
  //   console.log(item);
  //   // item.quantity = item.quantity+1
  //   qtymore(item.name, item.price, item.quantity);
  //   getData();
  // }
  function onMin(item) {
    console.log(item);
    if (item.quantity != 0) {
      // item.quantity = item.quantity-1
      qtyless(item.name, item.price, item.quantity).then(()=>{
        let i=product.findIndex(element=>element.name==item.name)
        let New=[...product]
        New[i]={...New[i],"quantity":parseInt(item.quantity)-1}
        setProduct(New)
        setTotal(total=>total-item.price)
      })
      // getData()
      // console.log(product)

    }
  }

  function onPlus(item) {
    console.log(item)
    console.log(product)
    // item.quantity = item.quantity+1
    // qtymore(item.name, item.price, item.quantity).then(()=>{

      // console.log(product.findIndex(element=>element.name==item.name))
      console.log(product)
      // product[product.findIndex(element=>element.name==item.name)].quantity=item.quantity+1
      // setProduct((PROD)=>{
      //   PROD.map((item)=>{
      //     console.log(item)
      //   })
      // })
      qtymore(item.name, item.price, item.quantity).then(()=>{
        let i=product.findIndex(element=>element.name==item.name)
        let New=[...product]
        New[i]={...New[i],"quantity":parseInt(item.quantity)+1}
        setProduct(New)
        setTotal(total=>total+item.price)
      })


      console.log(product)
      
    // })
    // getData()
  }

  // async function storeData() {
  //   try {
  //     await AsyncStorage.setItem('@storage_Key', 'stored value')
  //   } catch (e) {
  //     // saving error
  //   }
  // }

  async function getitem(name,prodarr,Total) {
    console.log("TOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO   ",Total)
    try {
      const item = await AsyncStorage.getItem(name);
      // console.log(name)
      // const value = await AsyncStorage.getAllKeys()
      if (item !== null) {
        let myitem = JSON.parse(item);
        console.log(myitem)

        let newprod = {
          name: name,
          price: parseInt(myitem.price),
          quantity: parseInt(myitem.quantity),
          CAT: myitem.category,
          SUB: myitem.subcat,
          available: myitem.available
        };

        // console.log(myitem.price+10)
        // console.log(myitem.price*myitem.quantity)
        Total=Total+(myitem.price*myitem.quantity)
        setTotal(total=>total+Total)
        // console.log("TOTAL    ",Total)

        // console.log(newprod)

        prodarr.push(newprod)
      }
    } catch (e) {
      // console.log(e);
      // error reading value
    }

    // prodarr.push(newprod)
  }

  async function getData() {
    // console.log("!@#$%^&         ",product)
    setTotal(0)
    try {
      const value = await AsyncStorage.getAllKeys()
      // console.log("VALVALVLAVLAVLLVALAV", value)
      if(value !== null) {
        // console.log("VALLL",value)
        let prodarr  = []
        let Total=0
        value.forEach(function(name) {
          // let newprod = getitem(name, prodarr)
          getitem(name, prodarr, Total).then(()=>{
            // console.log("1PROD",prodarr)
            // console.log("PRODDDDD",product)
            setProduct(prodarr)   
          })
          // console.log(prodarr)

          // prodarr.push(newprod)

          // console.log(name)
        });
        // setProduct(prodarr);
        // value previously stored
      } 
      // else {
      //   console.log('lmao');
      // }
    } catch (e) {
      // error reading value
    }
  }

  // function blurry() {
  //   console.log("hsadhasdashdhasdahsd")
  // }

  // function DeleteCart(item){
  //   console.log(item)
  //   setProduct((item)=>{
  //     // product.findIndex((I)=>I=item.name)
      
  //     AsyncStorage.removeItem(item.name).then(setTotal(total=>total-(item.quantity*item.price)))
  //     return product.filter((I)=>I.name!=item.name)
  //   })
  // }

  const leftActions = (item) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 2,
          width: '17.5%',
          // opacity: 0.8,
          borderRadius: 2,
          // paddingVertical: ,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#d00f16',
            // opacity: 0.2,
            // height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            // marginVertical: 5,
          }}
          onPress={()=>setProduct(()=>{
            // product.findIndex((I)=>I=item.name)
            AsyncStorage.removeItem(item.name).then(setTotal(total=>total-(item.quantity*item.price)))
            return product.filter((I)=>I.name!=item.name)
            })
          }
            
          >
          <Icon name="delete" color="white" size={24} />
        </TouchableOpacity>
      </View>
    );
  };
  //   const onAdd = () => setProduct(prev => prev + 1);

  return (
    <View style={styles.Screen}>
      <NavigationEvents
        onWillFocus={() => {
          getData();
        }}
      />
      <View style={{width: '100%', height: "65%", marginVertical:12}}>
        <FlatList
          data={product}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Swipeable renderLeftActions={()=>leftActions(item)}>
              <View style={styles.TextInputbox}>
                <View style={{width: 100, height: 100, flex: 2}}>
                  <Image
                    source={newbiryani}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'stretch',
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 5,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    // alignItems: '',
                    paddingHorizontal: '5%',
                  }}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.title1}>{'Rs. ' + item.price}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    // alignContent: 'flex-end',
                    // paddingLeft: 100,
                    flex: 1,
                  }}>
                  {/* <View >
                  <Text>{item.quantity}</Text>
                </View> */}
                  <TouchableOpacity
                    style={styles.Confirmbutton}
                    onPress={() => {
                      onPlus(item);
                    }}>
                    {/* // onPress={onAdd(item.quantity)}> */}
                    <Icon name="plus" color="#ffffff" />
                  </TouchableOpacity>
                  <Text style={{paddingLeft: 22, opacity: 0.5}}>
                    {item.quantity}
                  </Text>
                  <TouchableOpacity
                    style={[styles.Confirmbutton,{backgroundColor: item.quantity==1? "grey": "#d00f16" }]}
                    disabled={item.quantity==1}
                    onPress={() => {
                      onMin(item);
                    }}>
                    {/* //   onPress={item => setProduct(item.quantity + 1)}> */}
                    {/* //   onPress={onMin(item)}> */}
                    {/* <Text style={styles.boxfont}>UPDATE</Text> */}
                    <Icon name="minus" color="#ffffff" style="light" />
                  </TouchableOpacity>
                </View>
              </View>
            </Swipeable>
          )}
        />
      </View>
      <View style={{alignItems: 'center', paddingTop: '5%'}}>
        <View style={styles.totalbox}>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text style={styles.totalboxfont}>SubTotal</Text>
            <Text style={styles.totalboxfont}>Rs. {total}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text style={styles.totalboxfont}>Discount</Text>
            <Text style={styles.totalboxfont}>Rs. {total}</Text>
          </View> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text style={styles.totalboxfont1}>Total</Text>
            <Text style={styles.totalboxfont1}>Rs. {total}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bigbutton}>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.Confirmationbutton]}>
          <Text style={styles.bigbuttontext}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // confirmbutton: {
  //   flexDirection: 'row',
  //   // width: "30%",
  //   padding: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  Screen: {
    // flexDirection: 'row',
    height: '100%',
    // paddingTop: '10%',
    // justifyContent: 'center',
    backgroundColor: '#e8e8e8',

    // flex: '20%',
  },
  TopBar: {
    padding: 20,
    flexDirection: 'row',
    flex: 2,

    width: '100%',
    height: '100%',
    backgroundColor: '#d00f16',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TopBarText: {
    // padding: 40,
    flexDirection: 'row',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'left',
    alignItems: 'flex-start',
    flex: 6,
  },
  TopBarSearch: {
    // flexDirection: "row",
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 20,
    flex: 1,
  },
  TopBarBack: {
    color: 'white',
    flex: 1,
    fontSize: 20,
  },
  RestScreen: {
    // flex: 9,
    // width: 100,
    // flex: 8,
    // width: 100,
    paddingTop: 50,
    backgroundColor: '#e8e8e8',
    height: '560',
    // justifyContent: 'center',
    // padding: 40,
    alignItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  firstbox: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    paddingTop: 40,
    // justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // justifyContent: "center",
  },
  totalbox: {
    width: '100%',
    flexDirection: 'column',
    // marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    // borderWidth: 0.5,
    // borderRadius: 5,
    height: 50,
    // paddingHorizontal: 20,
    paddingHorizontal: '5.7%',
    // paddingBottom: '10%',
    // paddingLeft: 5,
    // paddingTop: 40,
    justifyContent: 'space-between',
    // alignContent: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
  },
  TextInputbox: {
    flexDirection: 'row',
    padding: 7,
    // paddingHorizontal: '5.7%',
    width: '100%',
    height: 100,
    borderRadius: 5,
    // elevation: 5,
    // flexDirection: 'row',
    marginVertical: 2,
    // borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    // borderBottomWidth: 1,
    // alignContent: 'center',
    // justifyContent: 'space-around',
    // textAlign: 'left',
    fontFamily: 'Roboto',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // borderRadius: 10,
    // height: 50,
  },
  title: {
    fontSize: 20,
    color: 'black',
    // paddingHorizontal:
    // fontWeight: 'bold',
  },
  title1: {
    fontSize: 14,
    color: 'black',
    opacity: 0.5,
  },
  totalboxfont: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: 'black',
    opacity: 0.5,
    // paddingHorizontal: 10,
  },
  totalboxfont1: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto-bold',
    color: 'black',
    // opacity: 0.5,
    // paddingHorizontal: 10,
  },
  boxfont: {
    fontSize: 14,
    color: '#ffffff',
    // paddingTop: 4,
  },

  Confirmbutton: {
    // padding: 20,
    // paddingBottom: 20,
    // paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 2,
    width: 20,
    height: 20,
    shadowColor: '#000',
    borderRadius: 180,
    // shadowOffset: {width: 2, height: 4},
    shadowOpacity: 20,
    // shadowRadius: 6,
    elevation: 5,
    // minHeight: '6%',
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  Confirmationbutton: {
    // padding: '5%',
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
    // elevation: 2,
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

    // opacity: 1,
  },
  bigbutton: {
    paddingTop: '10%',
    paddingHorizontal: '23%',
    // flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusbutton: {
    // paddingHorizontal: 15,
    // paddingTop: 28,
    backgroundColor: '#d00f16',
    borderRadius: 180,
    width: 56,
    height: 56,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    // minHeight: '6%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

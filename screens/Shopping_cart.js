import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import newbiryani from '../assets/images/newbiryani.png';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function Shopping({navigation}) {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
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
    } catch (e) {
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
    } catch (e) {
    }
  }

  function onMin(item) {
    console.log(item);
    if (item.quantity != 0) {
      qtyless(item.name, item.price, item.quantity).then(()=>{
        let i=product.findIndex(element=>element.name==item.name)
        let New=[...product]
        New[i]={...New[i],"quantity":parseInt(item.quantity)-1}
        setProduct(New)
        setTotal(total=>total-item.price)
      })
    }
  }

  function onPlus(item) {
    console.log(item)
    console.log(product)
      console.log(product)
      qtymore(item.name, item.price, item.quantity).then(()=>{
        let i=product.findIndex(element=>element.name==item.name)
        let New=[...product]
        New[i]={...New[i],"quantity":parseInt(item.quantity)+1}
        setProduct(New)
        setTotal(total=>total+item.price)
      })
      console.log(product)
  }

  async function getitem(name,prodarr,Total) {
    try {
      const item = await AsyncStorage.getItem(name);
      if (item !== null) {
        let myitem = JSON.parse(item);
        let newprod = {
          name: name,
          price: parseInt(myitem.price),
          quantity: parseInt(myitem.quantity),
          CAT: myitem.category,
          SUB: myitem.subcat,
          available: myitem.available
        };

        Total=Total+(myitem.price*myitem.quantity)
        setTotal(total=>total+Total)
        prodarr.push(newprod)
      }
    } catch (e) {
    }
  }

  async function getData() {
    setTotal(0)
    try {
      const value = await AsyncStorage.getAllKeys()
      if(value !== null) {
        let prodarr  = []
        let Total=0
        value.forEach(function(name) {
          getitem(name, prodarr, Total).then(()=>{
            setProduct(prodarr)   
          })
        });
      } 
    } catch (e) {
    }
  }

  const leftActions = (item) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 2,
          width: '17.5%',
          borderRadius: 2,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#d00f16',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={()=>setProduct(()=>{
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

  return (
    <View style={styles.Screen}>
      <NavigationEvents
        onWillFocus={() => {
          getData();
        }}
      />
      <View style={{width: '100%', height: 480, marginVertical:12}}>
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
                    paddingHorizontal: '5%',
                  }}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.title1}>{'Rs. ' + item.price}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    flex: 1,
                  }}>
                  <TouchableOpacity
                    style={styles.Confirmbutton}
                    onPress={() => {
                      onPlus(item);
                    }}>
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

  Screen: {
    height: '100%',
    backgroundColor: '#e8e8e8',
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
    flexDirection: 'row',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'left',
    alignItems: 'flex-start',
    flex: 6,
  },

  TopBarSearch: {
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
    paddingTop: 50,
    backgroundColor: '#e8e8e8',
    height: '560',
    alignItems: 'center',
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
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
  },

  totalbox: {
    width: '100%',
    flexDirection: 'column',
    borderColor: 'black',
    backgroundColor: 'white',
    height: 50,
    paddingHorizontal: '5.7%',
    justifyContent: 'space-between',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
  },

  TextInputbox: {
    flexDirection: 'row',
    padding: 7,
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginVertical: 2,
    backgroundColor: 'white',
    borderWidth: 0,
    fontFamily: 'Roboto',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
  },

  title: {
    fontSize: 20,
    color: 'black',
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
  },

  totalboxfont1: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto-bold',
    color: 'black',
  },

  boxfont: {
    fontSize: 14,
    color: '#ffffff',
  },

  Confirmbutton: {
    backgroundColor: '#d00f16',
    borderRadius: 2,
    width: 20,
    height: 20,
    shadowColor: '#000',
    borderRadius: 180,
    shadowOpacity: 20,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  Confirmationbutton: {
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
    paddingTop: '10%',
    paddingHorizontal: '23%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plusbutton: {
    backgroundColor: '#d00f16',
    borderRadius: 180,
    width: 56,
    height: 56,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

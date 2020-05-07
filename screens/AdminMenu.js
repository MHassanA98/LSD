import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import newbiryani from '../assets/images/newbiryani.png';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import firebase from '../assets/DatabaseConfig';

export default function AdminMenu({navigation}) {
  const handleAddPress = () => {
    navigation.navigate('AddItem');
  };

  const [product, setProduct] = useState([]);
  
  function onscreenload() {
    mydb = firebase
      .database()
      .ref(
        '/Inventory/' +
          navigation.getParam('Cat') +
          '/' +
          navigation.getParam('Sub'),
      );
    mydb.once('value').then(function(snapshot) {
      let prodarr = [];
      snapshot.forEach(function(childsnapshot) {
        let newprod = {
          name: childsnapshot.key,
          price: childsnapshot.child('Price').val(),
          quantity: childsnapshot.child('Qty').val(),
        };
        prodarr.push(newprod);
      });
      setProduct(prodarr);
    });
  }



  const leftActions = (item) => {
    return (
      <View style={{flexDirection: 'row', marginVertical: 5, width: '35%'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#34ade9',
            alignItems: 'center',
            justifyContent: 'center',
        }}
          onPress={() => {
            navigation.navigate('UpdateItem', {
              CAT: navigation.getParam('Cat'),
              SUB: navigation.getParam('Sub'),
              ITEM: item,
            });
          }}>
          <Icon name="edit" color="white" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'red',
            opacity: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // marginVertical: 5,
          }}
          onPress={()=>{

              Alert.alert(
                'Remove '+item.name+"?",
                'The item will be deleted permanently',
                [
                  {
                    text: 'Cancel',
                    // style:"destructive"
                    type: 'destructive',
                  },
          
                  {
                    text: 'Confirm',
                    onPress: () => removeItem(item),
                  },
                ],
          
                {cancelable: false},
              );
          }}
          >
          <Icon name="delete" color="white" size={24} />
        </TouchableOpacity>
      </View>
    );
  };

  const removeItem=(item)=>{
    setProduct(()=>{
      return product.filter((I)=>I.name!=item.name)

    })

    mydb = firebase
      .database()
      .ref(
        '/Inventory/' +
          navigation.getParam('Cat') +
          '/' +
          navigation.getParam('Sub') +
          '/'+item.name,
      ).remove()
    
  }

  return (
    <View style={styles.Screen}>
      <NavigationEvents
        onWillFocus={() => {
          onscreenload();
        }}
      />
      <View style={{height: '90%'}}>
        <FlatList
          data={product}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Swipeable renderRightActions={()=>leftActions(item)}>
              <View raised style={styles.TextInputbox}>
                <View style={{width: 100, height: 100}}>
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
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 20,
                    width: '65%',
                  }}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.boxfont}>{'Rs. ' + item.price}</Text>
                </View>

                <TouchableOpacity
                  style={{justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Icon name="chevron-left" color="black" size={24} />
                </TouchableOpacity>
              </View>
            </Swipeable>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 10,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity style={styles.plusbutton} onPress={handleAddPress}>
          <Icon name="add" color="white" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    paddingTop: '5%',
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
    backgroundColor: '#e8e8e8',
    height: '100%',
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
  
  TextInputbox: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    width: '100%',
    height: 100,
    elevation: 2,
    marginVertical: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    fontFamily: 'Roboto',
    shadowColor: 'darkgrey',
    shadowOpacity: 5,
  },
  
  title: {
    fontSize: 20,
    color: 'black',
  },
  
  boxfont: {
    fontSize: 14,
    color: 'black',
  },

  Confirmbutton: {
    paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 2,
    width: 90,
    height: 36,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
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
},

  bigbutton: {
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
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

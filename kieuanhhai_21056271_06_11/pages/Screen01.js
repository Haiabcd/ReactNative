import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          A premium online store for {'\n'} sporter and their stylish choice
        </Text>
      </View>
      <View style={styles.center}>
        <Image source={require('../assets/XHome.png')} style={styles.image} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.shopTitle}>POWER BIKE {'\n'}        SHOP</Text>
      </View>

      <View style={styles.getStated}>
        <TouchableOpacity onPress={() => navigation.navigate('Danh Sách Sản Phẩm')}>
          <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.getStated} onPress={()=>navigation.navigate('Thêm Sản Phẩm')}>
          <Text style={{ fontSize: 24, color: 'yellow', fontWeight: 'bold' }}>Add Products</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  center: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width: 380,
    height: 400,
    backgroundColor: '#E941411A',
    borderRadius: 15,
  },

  image: {
    width: 330,
    height: 310,
    marginBottom: 20,
  },
  shopTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  getStated:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      width:380,
      height:50,
      backgroundColor:'red',
      borderRadius:50,
  },
})

export default Home;
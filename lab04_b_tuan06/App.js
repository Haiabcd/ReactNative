import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const products = [
  { id: '1', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d1.png')},
  { id: '2', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d2.png')},
  { id: '3', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d3.png')},
  { id: '4', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d4.png')},
  { id: '5', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d5.png')},
  { id: '6', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d6.png')},
  { id: '7', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d1.png')},
  { id: '8', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d2.png')},
  { id: '9', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d3.png')},
  { id: '10', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d4.png')},
  { id: '11', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d5.png')},
  { id: '12', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', image: require('./assets/d6.png')},
];


const HeaderSearch = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Dây cáp usb"
        placeholderTextColor="#ccc"
      />
      <TouchableOpacity>
        <Icon name="cart" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="menu" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

// danh sách sản phẩm
const ProductList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.sale}>
            <Text style={{ fontSize: 12, color: '#FFD700' }}>⭐⭐⭐⭐⭐</Text>
            <Text>(15)</Text>
      </View>
      <View style={styles.sale}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.productDiscount}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <HeaderSearch />
      <ProductList />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#007BFF',
    justifyContent: 'space-between',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
    height: 40,
  },
  productItem: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
    marginTop:30
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  productDiscount: {
    fontSize: 14,
    color: 'red',
  },

  sale: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default App;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../reduxToolkit/slice';
import Screen03 from './Screen03';

const categories = ['All', 'Roadbike', 'Mountain'];

const getImage = (imagePath) => {
  switch (imagePath) {
    case 'image1':
      return require('../assets/Xe01.png');
    case 'image2':
      return require('../assets/Xe02.png');
    case 'image3':
      return require('../assets/Xe03.png');
    case 'image4':
      return require('../assets/Xe04.png');
    case 'image5':
      return require('../assets/Xe01.png');
    default:
      return require('../assets/Xe02.png');
  }
};

const ManHinh01 = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState('All');

  const dispatch = useDispatch();
  const bike = useSelector((state) => state.bikes.bikes);
  const status = useSelector((state) => state.bikes.status);
  const error = useSelector((state) => state.bikes.error);

  const chuyen = (item) => {
    navigation.navigate('Screen03', { bike: item });
  };

  const filteredBike = bike.filter((bike) =>
    selectedButton === 'All' ? true : bike.category === selectedButton
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBikes());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <Text>Loading...</Text>;
  if (status === 'failed') return <Text>Error: {error}</Text>;

  const hienThi = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.danhSachSP}
        onPress={() => {
          chuyen(item);
        }}>
        <View>
          <MaterialIcons
            name="favorite"
            size={24}
            color={item.heart ? 'red' : 'gray'}
            style={styles.heartIcon}
          />

          <Image
            source={getImage(item.image)}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.sanPham}>
          <Text style={styles.nameSP}>{item.name}</Text>
          <Text style={styles.priceSP}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerMH01}>
      <View style={styles.titleMH01}>
        <Text style={{ fontSize: 28, color: 'red', fontWeight: 'bold' }}>
          The world’s Best Bike
        </Text>
      </View>

      <View style={styles.action}>
        <View style={styles.filterContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.button,
                selectedButton === 0 ? styles.doiMau : null,
              ]}
              onPress={() => setSelectedButton(category)}>
              <Text
                style={[
                  styles.filterButtonText,
                  /*Nếu bên trái là "true" thì bên phải được làm và ngược lại*/
                  selectedButton === category && styles.activeFilterButton,
                ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style ={styles.bikesView}>
          <FlatList
            data={filteredBike}
            keyExtractor={(item) => item.id}
            renderItem={hienThi}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMH01 :{
    flex:1,
  },
  titleMH01: {
    flex:0.5,
    marginLeft: 35,
  },

  action: {
    flex:8,
    flexDirection: 'column',
  },

  button: {
    borderColor: 'red',
    borderWidth: 1,
    width: 100,
    height: 40,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
  },

  filterContainer: {
    flex:0.8,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
  },

  filterButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  doiMau: {
    backgroundColor: 'blue',
  },

  danhSachSP: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 30,
  },
  bikesView :{
    flex:6,
  },

  productImage: {
    width: 138,
    height: 138,
    marginBottom: 10,
  },

  nameSP: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  priceSP: {
    fontSize: 17,
    fontWeight: 'medium',
  },
});

export default ManHinh01;

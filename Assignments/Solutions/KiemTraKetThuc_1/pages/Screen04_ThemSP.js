// AddProductScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {addBike} from '../reduxToolkit/slice';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';

const AddProductScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('roadbike');
  const [imageUri, setImageUri] = useState(null);
  const dispatch = useDispatch();

  // Hàm để chọn ảnh từ thư viện ảnh
  const pickImage = async () => {
    // Xin quyền truy cập ảnh
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Lỗi", "Bạn cần cấp quyền truy cập thư viện ảnh để chọn ảnh.");
      return;
    }

    // Mở thư viện ảnh
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // Lưu đường dẫn ảnh đã chọn
    }
  };

  const handleAddProduct = () => {
    if (!name || !price || !imageUri) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin và chọn ảnh cho sản phẩm');
      return;
    }

    const newProduct = {
      name,
      price,
      category,
      imageUri,  // Lưu đường dẫn ảnh vào sản phẩm
    };
    dispatch(addBike(newProduct));
    Alert.alert('Thành công', 'Sản phẩm đã được thêm');

   
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên xe:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nhập tên xe"
      />

      <Text style={styles.label}>Giá xe:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Nhập giá xe"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Loại xe:</Text>
      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Roadbike" value="roadbike" />
        <Picker.Item label="Mountain" value="mountain" />
        <Picker.Item label="Hybrid" value="hybrid" />
      </Picker>

      <Text style={styles.label}>Ảnh sản phẩm:</Text>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <TouchableOpacity style={styles.imagePlaceholder} onPress={pickImage}>
          <Text style={styles.imageText}>Chọn ảnh</Text>
        </TouchableOpacity>
      )}

      <Button title="Thêm Sản Phẩm" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 15,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  imageText: {
    color: '#666',
  },
});

export default AddProductScreen;

import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation ,route}) {
   const [selectedColor, setSelectedColor] = useState(require('./assets/vs_blue.png'));

   React.useEffect(() => {
    if (route.params?.image) {
      setSelectedColor(route.params.image); 
    }
    }, [route.params?.image]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 5 }}>
        <Image
          source={selectedColor}
          style={{
            width: '100%',
            height: 350,
            marginTop: 30,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View
        style={{ flex: 0.75, flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, marginVertical: 10, textAlign: 'center' }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
          marginBottom: 10,
        }}>
        <Text style={{ fontSize: 18, color: '#FFD700' }}>⭐⭐⭐⭐⭐</Text>
        <Text style={{ fontSize: 16, marginLeft: 5 }}>(828 đánh giá)</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
          marginBottom: 10,
        }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>1.790.000 ₫</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textDecorationLine: 'line-through',
            marginLeft: 30,
            marginTop: 6,
          }}>
          1.990.000 ₫
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ marginLeft: 30 }}>Ở đâu rẻ hơn hoàn tiền</Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#f0f0f0',
            borderRadius: 5,
            marginVertical: 10,
            alignItems: 'center',
            paddingVertical:12,
            marginHorizontal: 25,
          }}
          onPress={() => navigation.navigate('Details',{image :selectedColor})}>
          <Text style={{ fontSize: 16 }}>4 màu - Chọn màu</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            borderRadius: 5,
            alignItems: 'center',
            marginVertical: 20,
            marginHorizontal: 25,
            paddingVertical:13,
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
            {' '}
            Chọn Mua
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Page1({ navigation,route }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const {image} = route.params;

  const products = {
    '#C5F1FB': {
      imageUrl: require('./assets/vs_silver.png'),
      name: 'Điện Thoại Vsmart Joy 3 \nHàng chính hãng',
      subtitle: 'Màu: Bạc \nCung cấp bởi Tiki Tradding \n1.790.000 đ',
    },
    '#F30D0D': {
      imageUrl: require('./assets/vs_red.png'),
      name: 'Điện Thoại Vsmart Joy 3 \nHàng chính hãng',
      subtitle: 'Màu: Đỏ \nCung cấp bởi Tiki Tradding \n1.790.000 đ',
    },
    '#000000': {
      imageUrl: require('./assets/vs_black.png'),
      name: 'Điện Thoại Vsmart Joy 3 \nHàng chính hãng',
      subtitle: 'Màu: Đen \nCung cấp bởi Tiki Tradding \n1.790.000 đ',
    },
    '#234896': {
      imageUrl: require('./assets/vs_blue.png'),
      name: 'Điện Thoại Vsmart Joy 3 \nHàng chính hãng',
      subtitle: 'Màu: Xanh \nCung cấp bởi Tiki Tradding \n1.790.000 đ',
    },
  };

  const colors = Object.keys(products);

  const selectColor = (color) => {
    setSelectedColor(color); // Cập nhật màu được chọn
  };

  const selectedProduct = products[selectedColor] || {
    imageUrl: image, // Ảnh mặc định khi chưa chọn màu
    name: 'Điện Thoại Vsmart Joy 3 \nHàng chính hãng',
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFF'}}>
      {/* Khu vực hiển thị sản phẩm */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderRadius: 10,
          backgroundColor: '#FFFFFF', // Đặt màu nền cố định là trắng
        }}>
        <View>
          <Image
            source={selectedProduct.imageUrl} // Hiển thị ảnh từ thư mục local assets
            style={{ width: 150, height: 200, resizeMode: 'contain' }}
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 16 }}>{selectedProduct.name}</Text>
          <View style={{ flexDirection: 'column' }}>
            {selectedProduct.subtitle ? (
              <>
                <Text style={{ fontSize: 14, color: '#000000' }}>
                  <Text>Màu:</Text>{' '}
                  <Text style={{ fontWeight: 'bold' }}>
                    {selectedProduct.subtitle.split('\n')[0].split(': ')[1]}
                  </Text>
                </Text>
                <Text style={{ fontSize: 14, color: '#000000' }}>
                  <Text>Cung cấp bởi</Text>{' '}
                  <Text style={{ fontWeight: 'bold' }}>Tiki Tradding</Text>
                </Text>
                <Text style={{ fontSize: 14, color: '#000000', fontWeight:'bold' }}>
                  {selectedProduct.subtitle.split('\n')[2]}
                </Text>
              </>
            ) : (
              <Text style={{ fontSize: 14, color: '#000000' }}>
                Vui lòng chọn màu bên dưới {'\n'}Thông tin sẽ hiển thị ngay 
              </Text>
            )}
          </View>
        </View>
      </View>

      {/* Chọn màu */}
      <View style={{flex:4, backgroundColor:'#C4C4C4'}}>
              <Text style={{ fontSize: 16, marginBottom: 15, marginTop
              :10 ,fontWeight: 'bold', marginLeft:15}}>
        Chọn một màu bên dưới:
      </Text>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 95,
              height: 95,
              marginBottom: 10,
              borderRadius: 5,
              backgroundColor: color,
            }}
            onPress={() => selectColor(color)}
          />
        ))}
      </View>

      {/* Nút hoàn thành */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          paddingVertical: 15,
          alignItems: 'center',
          borderRadius: 5,
          marginHorizontal:10,
          backgroundColor: selectedColor ? selectedColor : '#CCCCCC', // Chỉ thay đổi màu nút khi có màu được chọn
        }}
        onPress={() => navigation.navigate('Home',{image:selectedProduct.imageUrl})}>
        <Text style={{ fontSize: 16, color: '#FFFFFF', fontWeight: 'bold'}}>
          XONG
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Page1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

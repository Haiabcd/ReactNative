import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const products = [
  { id: '1', name: 'Ca nấu lẩu, nấu mì mini...', shop: 'Shop Devang', image: require('./assets/ca_nau_lau.png') },
  { id: '2', name: '1KG KHÔ GÀ BƠ TỎI...', shop: 'LTD Food', image: require('./assets/ga_bo_toi.png') },
  { id: '3', name: 'Xe cẩu đa năng', shop: 'Thế giới đồ chơi', image: require('./assets/xa_can_cau.png') },
  { id: '4', name: 'Đồ chơi dạng mô hình', shop: 'Thế giới đồ chơi', image: require('./assets/do_choi_dang_mo_hinh.png') },
  { id: '5', name: 'Lãnh đạo giản đơn', shop: 'Minh Long Book', image: require('./assets/lanh_dao_gian_don.png') },
  { id: '6', name: 'Hiểu lòng con trẻ', shop: 'Minh Long Book', image: require('./assets/hieu_long_con_tre.png') },
  { id: '7', name: 'Donal Trump Thiên tài lãnh đạo', shop: 'Minh Long Book', image: require('./assets/trump_1.png') },
  // Bạn có thể thêm nhiều sản phẩm hơn để kiểm tra cuộn
];

const ProductItem = ({ item }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <Text style={[styles.productShop1, isPressed ? styles.hoverText : null]}>
            {item.name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <Text style={[styles.productShop2, isPressed ? styles.hoverText : null]}>
            Shop: {item.shop}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const Header = () => (
  <View style={styles.header}>
    <Icon name="chevron-left" size={30} color="white" />

    <TouchableOpacity>
        <Text style={styles.headerText}>Chat</Text>
    </TouchableOpacity>
    
    <Icon name="shopping-cart" size={30} color="white" />
  </View>
);

const Notice = () => (
  <View style={styles.notice}>
    <Text style={styles.noticeText}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      
      <Notice />

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'F5F5F5',
    padding: 10,
    marginTop: 45,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#007BFF',
    padding: 10,
    marginBottom:5,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notice: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    marginHorizontal:15
  },
  noticeText: {
    fontSize: 14,
    color: '#333',
  },
  productShop1: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  productShop2: {
    fontSize: 14,
    color: 'red',
  },
  hoverText: {
    color:"blue",
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  productImage: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  chatButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 3,
    with:40,
    height:40
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;

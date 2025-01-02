import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import store  from './reduxToolkit/store';

import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/Screen01';
import ManHinh01 from './pages/Screen02';
import ManHinh02 from './pages/Screen03';
import ManHinh03 from './pages/Screen04_ThemSP';

const Stack = createStackNavigator();

const chuyeManHinh= () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Trang Chủ" >
         <Stack.Screen name="Trang Chủ" component={Home} />
         <Stack.Screen name="Danh Sách Sản Phẩm" component={ManHinh01} />
         <Stack.Screen name="ManHinh02" component={ManHinh02} />
         <Stack.Screen name="Thêm Sản Phẩm" component={ManHinh03} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


export default chuyeManHinh;


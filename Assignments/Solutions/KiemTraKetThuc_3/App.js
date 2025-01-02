import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './components/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { addTodo, toggleTodo } from './reduxToolkit/todosSlice';

import { Provider } from 'react-redux';
import store from './reduxSaga/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from './reduxSaga/actions';

//Màn hình 2
const TrangChu = ({ navigation, route }) => {
  const [arrayTask, setArrayTask] = useState([]);
  const [checked, setChecked] = useState(false);

   const todos = useSelector((state) => state.todos.items);
  

  const addOnTask = (item) => {
    setArrayTask([...arrayTask, item]);
  };

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchDataRequest()); // Gọi action để fetch data
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const hienThi = ({ item }) => {
    return (
      <View style={styles.nutMH2}>
        <TouchableOpacity style={styles.hienThiMH2}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon1
              name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={30}
              color={checked ? 'red' : 'black'}
            />
            <Text style={{ textAlign: 'center', fontSize: 24 }}>
              {item.task}
            </Text>
          </View>
          <Icon name="pencil" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.top1}>
          <Image style={styles.anh1} source={require('./assets/avata.png')} />
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Hi Twinkle</Text>
            <Text style={{ fontSize: 14 }}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.inputText1}>
        <Icon name="search" size={20} color="#000" style={{ marginRight: 5 }} />
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      <View style={styles.menuCenter}>
        <View style={styles.MenuValue}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={hienThi}
          />

          <TouchableOpacity
            style={styles.add}
            onPress={() =>
              navigation.navigate('Add your job', { methodArray: addOnTask })
            }>
            <Text style={styles.textAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

//Màn hình 3
const ManHinhBa = ({ navigation, route }) => {
  const [input, setInput] = useState(''); // Quản lý giá trị input
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);


  const handleAddTodo = () => {
    if (input.trim()) {
      console.log('Adding Todo:', input); // Kiểm tra giá trị input
      dispatch(addTodo(input)); // Thêm todo vào Redux
      alert('Todo added: ' + input); // Thông báo cho người dùng
      setInput(''); // Reset input
      navigation.navigate('Task'); // Điều hướng về trang Task
    } else {
      alert('Please enter a valid todo.'); // Thông báo nếu input rỗng
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topMH3}>
        <View style={styles.top2}>
          <Image style={styles.anh1} source={require('./assets/avata.png')} />
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Hi Twinkle</Text>
            <Text style={{ fontSize: 14 }}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.centerMH3}>
        <Text style={styles.addJob}>ADD YOUR JOB</Text>
      </View>

      <View style={styles.inputText1}>
        <Icon name="book" size={20} color="#000" style={{ marginRight: 5 }} />
        <TextInput
            style={styles.input}
            placeholder="Input your job"
            placeholderTextColor="#888"
            onChangeText={(text) => setInput(text)} 
            value={input}
          />
      </View>

      <View style={styles.buttonFinish}>
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonTextFinish}>Finish</Text>
          <Icon
            name="arrow-right"
            size={14}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.header1}>
        <Image
          style={styles.anhMH3}
          source={require('./assets/noteBook.png')}
        />
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Navigating = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Task" component={TrangChu} />
          <Stack.Screen name="Add your job" component={ManHinhBa} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigating;

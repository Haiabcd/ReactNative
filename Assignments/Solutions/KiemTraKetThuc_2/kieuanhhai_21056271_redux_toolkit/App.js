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



import { Provider } from 'react-redux';
import store from './reduxToolkit/store';

import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs} from './reduxToolkit/todosSlice';

import { addJob} from './reduxToolkit/todosSlice';

//Màn hình 2
const TrangChu = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { jobs, loading, error } = useSelector((state) => state.job);

   const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleAdd = () => {
    navigation.navigate('Add your job', { job: null});
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const hienThi = ({ item }) => {
    return (
        <TouchableOpacity style={styles.hienThiMH2}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon1
              name={item.status ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={30}
              color={item.status ? 'green' : 'black'}
            />
            <Text style={{ textAlign: 'center', fontSize: 24 }}>
              {item.task}
            </Text>
          </View>
          <Icon name="pencil" size={24} color="red" />
        </TouchableOpacity>
    );
  };

  return (
    <View style={{flex:1}}>
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
          <FlatList
            data={jobs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={hienThi}
          />
 
      </View>
      <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
          <TouchableOpacity
            style={styles.add}
            onPress={handleAdd}>
            <Text style={styles.textAdd}>+</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

//Màn hình 3
const ManHinhBa = ({ navigation, route }) => {
  const {job} = route.params;
  const [task, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
      dispatch(addJob({ task }));
      navigation.goBack();
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
            onChangeText={(text) => setTitle(text)} 
            value={task}
          />
      </View>

      <View style={styles.buttonFinish}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
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

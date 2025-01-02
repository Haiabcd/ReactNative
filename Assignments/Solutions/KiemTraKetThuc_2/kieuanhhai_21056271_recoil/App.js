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

import { RecoilRoot } from 'recoil';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { taskState, fetchTasksSelector } from './atoms';
import { useSetRecoilState } from 'recoil';


//Màn hình 2
const TrangChu = ({ navigation, route }) => {
  const [tasks, setTasks] = useRecoilState(taskState);
  const tasksLoadable = useRecoilValueLoadable(fetchTasksSelector);

  useEffect(() => {
    // Nếu loadable ở trạng thái đã hoàn thành, cập nhật state
    if (tasksLoadable.state === 'hasValue') {
      setTasks(tasksLoadable.contents);
    }
  }, [tasksLoadable, setTasks]);

  if (tasksLoadable.state === 'loading') {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (tasksLoadable.state === 'hasError') {
    return <Text>Error loading tasks</Text>;
  }

  const hienThi = ({ item }) => {
    return (
        <TouchableOpacity style={styles.hienThiMH2}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon1
              name={item.status ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={20}
              color={item.status ? 'green' : 'black'}
            />
            <Text style={{ textAlign: 'center', fontSize: 20 }}>
              {item.task}
            </Text>
          </View>
          <Icon name="pencil" size={24} color="red" />
        </TouchableOpacity>
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
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={hienThi}
          />
      </View>

      <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
          <TouchableOpacity
            style={styles.add}
            onPress={() =>
              navigation.navigate('Add your job')
            }>
            <Text style={styles.textAdd}>+</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

//Màn hình 3
const ManHinhBa = ({ navigation}) => {
  const [taskText, setTaskText] = useState('');
  const setTasks = useSetRecoilState(taskState);

  const add = () => {
    if (taskText.trim() === '') {
      alert('Vui lòng nhập công việc!');
      return;
    }

    const newTask = {
      id: Math.random().toString(),
      task: taskText,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]); 
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
            onChangeText={(text) => setTaskText(text)} 
            value={taskText}
          />
      </View>

      <View style={styles.buttonFinish}>
        <TouchableOpacity style={styles.button} onPress={add}>
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
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Task" component={TrangChu} />
          <Stack.Screen name="Add your job" component={ManHinhBa} />
        </Stack.Navigator>
      </NavigationContainer>
      </RecoilRoot>
  );
};

export default Navigating;

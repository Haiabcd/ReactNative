import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './components/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

//Màn hình 1
const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={styles.header}>
        <Image style={styles.anh} source={require('./assets/noteBook.png')} />
      </View>

      <View style={styles.center}>
        <View style={styles.mana}>
          <Text style={styles.textTitle}>MANAGE YOUR</Text>
          <Text style={styles.textTitle}>TASK</Text>
        </View>

        <View style={styles.inputText}>
          <Icon
            name="envelope"
            size={20}
            color="#000"
            style={{ marginRight: 5 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Task')}>
          <Text style={styles.buttonText}>GET STARTED</Text>
          <Icon
            name="arrow-right"
            size={20}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Màn hình 2
const TrangChu = ({ navigation, route}) => {
  const [arrayTask, setArrayTask] = useState([]);

  const addOnTask = (item) => {
    setArrayTask([...arrayTask, item]);
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
          {
            arrayTask.map((item, index) => {
            return (
              <TouchableOpacity style={styles.menu}>
                <Icon
                  name="check"
                  size={20}
                  color="white"
                  style={{ marginLeft: 10, color: 'black' }}
                />
                <Text style={styles.buttonText1}>{item}</Text>
                <Icon
                  name="edit"
                  size={20}
                  color="white"
                  style={{ marginLeft: 10, color: 'black' }}
                />
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            style={styles.add}
            onPress={
              (() => navigation.navigate('Add your job', { methodArray:addOnTask}))
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
  const [searchQuery, setSearchQuery] = useState('');
  const getInputText = () => {
    if (searchQuery.length === 0) {
      alert('Vui lòng nhập công viêc!');
      return;
    }
    route.params.methodArray(searchQuery);
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
          placeholder="input your job"
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      <View style={styles.buttonFinish}>
        <TouchableOpacity style={styles.button} onPress={getInputText}>
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Task" component={TrangChu} />
        <Stack.Screen name="Add your job" component={ManHinhBa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigating;

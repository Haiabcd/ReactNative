import React from 'react';
import {Text,View, TouchableOpacity, Image, TextInput } from 'react-native';

const App = () => {
    return(
        <View style={{flex:1, backgroundColor:'#C7F4F6'}}>
            <View style={{flex:2, alignItems: 'center',
                          marginBottom: 30}}> 
            
            </View>

            <View style={{flex:1}}> 
                  <Text style={{fontSize: 24,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 20,}}>FORGET {'\n'} PASSWORD</Text>
            </View>

            <View style={{flex:1, alignItems:'center'}}> 
                  <Text style={{fontSize:18, textAlign:'center', color:'black'}}>
                  Provide your account’s email for which you {'\n'} want to reset your password</Text>
            </View>

            <View style={{flex:1}}> 
                  <TextInput 
                  style={{borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 5,
                        padding: 15,
                        fontSize: 16,
                        backgroundColor: '#F5F5F5',
                        marginTop:20,
                        marginHorizontal: 20,
                        }}
                  placeholder="Email" />
            </View>

            <View style={{flex:1}}> 
                  <TouchableOpacity style={{
                      backgroundColor: 'yellow', 
                      paddingVertical: 15,
                      paddingHorizontal: 0,
                      borderRadius: 5,
                      marginTop: 30,
                      marginHorizontal: 23,

                  }} >
                        <Text style={{fontSize: 16,
                        fontWeight: 'bold',
                        color: 'black',
                        textAlign: 'center'
                        }}>NEXT</Text>
                  </TouchableOpacity>
            </View>

            <View style={{flex:1}}> 
            
            </View>
        </View>

    );
}


export default App;
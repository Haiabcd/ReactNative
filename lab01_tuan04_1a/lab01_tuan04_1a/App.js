import React from 'react';
import {Text,View, TouchableOpacity, Image } from 'react-native';

const App = () => {
    return(
      <View style={{flex:1, backgroundColor: '#E0F7FA'}}>
          <View style={{flex:2,
          flexDirection: 'row', 
          justifyContent:'center', 
          alignItems:'center', 
          }}>
         <View style={{
            width: 200, // Đặt chiều rộng
            height: 200, // Đặt chiều cao (bằng chiều rộng để tạo hình vuông)
            borderRadius: 100, // Làm bo tròn với giá trị bằng 1/2 chiều rộng hoặc chiều cao
            backgroundColor: 'black', // Màu nền đen cho vòng tròn
            marginBottom: 20,
            justifyContent: 'center',
            alignItems:'center',
         }}> 
              <View style={{
                width: 150, // Đặt chiều rộng
                height: 150, // Đặt chiều cao (bằng chiều rộng để tạo hình vuông)
                borderRadius: 100, // Làm bo tròn với giá trị bằng 1/2 chiều rộng hoặc chiều cao
               backgroundColor:'#C7F4F6', // Màu nền đen cho vòng tròn
              }}>
              
              </View>
         </View>
         </View>
         <View style={{flex:1, 
                       alignItems: 'center',
                       justifyContent: 'center',
                      }}>
            <Text style= {{fontSize: 30,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: 'black',
            }}>GROW {'\n'} YOUR BUSINESS</Text>
         
         </View>
         <View style={{flex:1}}>
         <Text style={{
                      fontSize: 18,
                      textAlign: 'center',
                      marginHorizontal: 20,
                      color: 'black',
                      marginVertical: 10,
         }}>We will help you to grow your business using {'\n'} online server </Text>
         
         </View>
         <View style={{flex:1, 
         flexDirection: 'row',
         justifyContent: 'space-around',
         alignItems: 'center',
         }}>
         <TouchableOpacity style={{
                                  backgroundColor: 'yellow', 
                                  paddingVertical: 10, // thêm khoảng trống theo chiều dọc bên trong nút
                                  paddingHorizontal: 30,// thêm khoảng trống trái phải bên trong nút
                                  borderRadius: 5, // bo tròn góc
                                  marginHorizontal: 10, // thêm khoảng cách trái phải bên ngoài nút
         }}>
            <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'black',
            }}>LOGIN</Text>
         </TouchableOpacity>
              
        <TouchableOpacity style={{
                                  backgroundColor: 'yellow', 
                                  paddingVertical: 10,
                                  paddingHorizontal: 30,
                                  borderRadius: 5,
                                  marginHorizontal: 10,
         }}>
          <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'black',
          }}>SIGN UP</Text>
        </TouchableOpacity>
         </View>
         <View style={{flex:1, alignItems:'center', backgroundColor:'#E5F4F5'}}>
            <Text style={{fontSize: 18,
                        fontWeight: 'bold',
                        color: 'black',}}>
                        HOW WE WORK?</Text>
         </View>
      </View>
    );
}

export default App;
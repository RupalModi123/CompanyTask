import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import view from '../assets/images/view.png'
import hide from '../assets/images/hide.png';
import google from '../assets/images/google.png';
import facebook from '../assets/images/facebook.png';
import SignUp from './SignUp';
const Login = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnpress = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userName) {
      Alert.alert('Enter username')
    }
    else if (!emailRegex.test(userName)) {
      Alert.alert('Enter email in correct format');
    }
    else if (!password) {
      Alert.alert('enter password')
    }
    else {
      navigation.navigate('MainScreen')
      console.log(userName);
      console.log(password);
    }
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#E1EBEE',
      justifyContent: 'center',
    }}>
      <View style={{
        paddingHorizontal: 15,
        paddingTop: 80,
        marginBottom: 15
      }}>
        <Text style={{ fontSize: 20, color: '#000000', fontWeight: 'bold' }}>Log In</Text>
        <Text style={{ fontSize: 10, color: 'grey' }}>Enter your details below & free sign up</Text>

      </View>
      <View style={{
        backgroundColor: 'white', flex: 1, padding: 15, borderRadius: 12
      }}>
        <View style={{ marginHorizontal: 10, paddingTop: 30 }}>
          <Text style={{ fontSize: 10, color: 'grey' }}>Your Email</Text>
        </View>
        <View style={{ flexDirection: 'row', borderRadius: 10, borderColor: 'grey', borderWidth: 0.3, marginVertical: 10, marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput style={{ height: 50, width: 200, color: '#000000' }}
              placeholder='Username'
              value={userName}
              keyboardType='email-address'
              placeholderTextColor={'#000000'}
              onChangeText={(text) => setUserName(text)}
            ></TextInput>
          </View>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 10, color: 'grey' }}>Password</Text>
        </View>
        <View style={{ flexDirection: 'row', borderRadius: 10, borderColor: 'grey', borderWidth: 0.3, marginVertical: 10, marginHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginRight: 15 }}>
            <TextInput style={{ height: 50, color: '#000000' }}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder='Password'
              placeholderTextColor={'#000000'}

            ></TextInput>
            <TouchableOpacity onPress={toggleShowPassword} style={{ justifyContent: 'center', }}>
              {showPassword ?
                (<Image source={view} style={{ width: 20, height: 20, alignSelf: 'center', }} />)
                :
                (<Image source={hide} style={{ width: 20, height: 20, alignSelf: 'center', }} />
                )
              }
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => handleOnpress()}
          style={{ marginVertical: 10, borderRadius: 12, borderColor: 'white', alignItems: 'center', height: 45, justifyContent: 'center', borderWidth: 1, backgroundColor: '#3d5cff' }}>
          <Text>Log In</Text>
        </TouchableOpacity>

        <View style={{ marginHorizontal: 10, alignContent: 'center', justifyContent: 'center', marginTop: 20, marginHorizontal: 20, flexDirection: 'row' }}>
          <Text style={{ fontSize: 12, textAlign: 'center', color: 'grey' }}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('SignUp') }}
            style={{}}>
            <Text style={{ color: 'blue', textDecorationLine: "line-through", textDecorationLine: 'underline', textAlign: 'center', fontSize: 12 }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 20 }}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('LoginScreen')}}>
            <Text style={{ fontSize: 12, textAlign: 'center', color: 'grey' }}>Or login with</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, }}>
              <Image source={google} style={{ width: 20, height: 20, marginRight: 25 }} />
              <Image source={facebook} style={{ width: 22, height: 22 }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};
export default Login;

import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import user from '../assets/images/user.png';
import person from '../assets/images/padlock.png';
import view from '../assets/images/view.png'
import hide from '../assets/images/hide.png';
import LinearGradient from 'react-native-linear-gradient';
import LoginScreen from './LoginScreen';
import checkbox from '../assets/images/checkbox.png'
import square from '../assets/images/square.png'

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [checkbox, setCheckbox] = useState(false);

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
      navigation.navigate('MobileNumberScreen')
      console.log(userName);
      console.log(password);
    }
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#E1EBEE',
      // paddingLeft: 15,
      // paddingRight: 15,
      justifyContent: 'center',
    }}>
      <View style={{
        paddingHorizontal: 15,
        paddingTop: 80,
        marginBottom: 15
      }}>
        <Text style={{ fontSize: 20, color: '#000000', fontWeight: 'bold' }}>Sign Up</Text>
        <Text style={{ fontSize: 10, color: 'grey' }}>Enter your details below & free sign up</Text>

      </View>

      <View style={{
        backgroundColor: 'white', flex: 1, padding: 15, borderRadius: 12

      }}>

        <View style={{ marginHorizontal: 10,paddingTop:30 }}>
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

        <View style={{}}>
          <TouchableOpacity
            onPress={() => handleOnpress()}
            style={{ marginVertical: 10, borderRadius: 12, borderColor: 'white', alignItems: 'center', height: 45, justifyContent: 'center', borderWidth: 1, backgroundColor: '#3d5cff' }}>
            <Text>Create Account</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity
              onPress={() => setCheckbox(!checkbox)}
              style={{ height: 30, flexDirection: 'row', alignItems: 'center' }}>
              {checkbox ? (
                <Image source={require('../assets/images/checkbox.png')} style={{ width: 20, height: 20, color: 'white' }} />
              ) : (
                <Image source={require('../assets/images/square.png')} style={{ width: 20, height: 20 }} />
              )}
            </TouchableOpacity>
            <View style={{marginHorizontal:10}}>
            <Text style={{ fontSize: 12, alignSelf: 'center', color: 'grey' }}>By creating an account you have to agree with our terms & conditions.</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => { navigation.navigate('LoginScreen'), handleOnpress() }}
            style={{ alignItems: 'center', height: 30, justifyContent: 'center', }}>
            <Text style={{ fontSize: 12 }}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{}}>
            <TouchableOpacity
              onPress={() => handleOnpress()}
              style={{ marginVertical: 10, borderRadius: 5, borderColor: 'white', alignItems: 'center', height: 45, justifyContent: 'center', borderWidth: 1 }}>
              <Text>LOGIN</Text>
            </TouchableOpacity>
          </View> */}

        {/* <View>
            <TouchableOpacity
              onPress={() => { navigation.navigate('LoginScreen'), handleOnpress() }}
              style={{ borderRadius: 5, borderColor: 'white', alignItems: 'center', height: 45, justifyContent: 'center', borderWidth: 1 }}>
              <Text>Register</Text>
            </TouchableOpacity>
          </View> */}
        <View style={{ marginHorizontal: 10, alignContent: 'center', justifyContent: 'center', marginTop: 20, marginHorizontal: 20, flexDirection: 'row' }}>
          {/* <Text>Don't have an account?</Text> */}


          <Text style={{ fontSize: 12, textAlign: 'center', color: 'grey' }}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('LoginScreen') }}
            style={{}}>
            <Text style={{ color: 'blue', textDecorationLine: "line-through", textDecorationLine: 'underline', textAlign: 'center', fontSize: 12 }}> Log in</Text>
          </TouchableOpacity>
        </View>
        
      </View>

    </View>
  );
};
export default SignUp;

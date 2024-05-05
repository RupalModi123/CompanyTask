import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './src/SignUp';
import LoginScreen from './src/LoginScreen';
import WelcomeShortcut from './src/WelcomeShortcut';
import IntroductorySkip from './src/IntroductorySkip';
import InitiationBypass from './src/InitiationBypass';
import MobileNumberScreen from './src/MobileNumberScreen';
import VerifyMobileNumber from './src/VerifyMobileNumber';
import MainScreen from './src/MainScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeShortcut"
        component={WelcomeShortcut}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IntroductorySkip"
        component={IntroductorySkip}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InitiationBypass"
        component={InitiationBypass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MobileNumberScreen"
        component={MobileNumberScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyMobileNumber"
        component={VerifyMobileNumber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

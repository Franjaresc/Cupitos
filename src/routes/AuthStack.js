import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/LoginComponent';
import Signup from '../components/SignUpComponent';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default AuthStack;

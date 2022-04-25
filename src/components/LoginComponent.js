import React from 'react';
import {View} from 'react-native';
import {Avatar, TextInput, Button, Text} from 'react-native-paper';
import Styles from '../styles/Styles';

const Login = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Avatar.Image
        size={100}
        source={{uri: 'https://picsum.photos/200'}}
        style={Styles.logo}
      />
      <TextInput label="Email" mode="outlined" style={Styles.input} />
      <TextInput
        label="Password"
        secureTextEntry
        mode="outlined"
        right={<TextInput.Icon name="eye" />}
        style={Styles.input}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')}
        style={Styles.logginButton}>
        Login
      </Button>
      <View style={Styles.containerRowCenter}>
        <Text>Don't have an account?</Text>
        <Button mode="text" onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Button>
      </View>
      <View style={Styles.containerRowCenter}>
        <Text>Forgot your password?</Text>
        <Button
          mode="text"
          onPress={() => navigation.navigate('ForgotPassword')}>
          Change Password
        </Button>
      </View>
    </View>
  );
};

export default Login;

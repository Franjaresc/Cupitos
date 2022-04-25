import React from 'react';
import {View} from 'react-native';
import {Avatar, TextInput, Button, Text} from 'react-native-paper';
import Styles from '../styles/Styles';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/userSlice'; 
import {changeHidePassword,
  changePassword,
  changeEmail,
} from '../redux/loginSlice';


const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const hidePassword = useSelector(state => state.login.hidePassword);
  const password = useSelector(state => state.login.password);
  const email = useSelector(state => state.login.email);

  const onPressLogin = () => {
    if (email === '' || password === '') {
      alert('Por favor ingrese su correo y contraseña');
    } else {
      const user = {
        email,
        password,
      };
      dispatch(login(user));
    }
  };

  return (
    <View style={Styles.container}>
      <Avatar.Image
        size={100}
        source={{uri: 'https://picsum.photos/200'}}
        style={Styles.logo}
      />
      <TextInput label="Email" mode="outlined" style={Styles.input} 
        onChangeText={text => dispatch(changeEmail(text))}
        value={email}
      />
      <TextInput
        label="Password"
        secureTextEntry={hidePassword}
        mode="outlined"
        value={password}
        onChangeText={text => dispatch(changePassword(text))}
        right={<TextInput.Icon 
          name={hidePassword ? 'eye' : 'eye-off'}
          onPress={() => dispatch(changeHidePassword(!hidePassword))}
        />}
        style={Styles.input}
      />
      <Button
        mode="contained"
        onPress={() => onPressLogin()}
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

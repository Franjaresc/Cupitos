import React from 'react';
import { View } from 'react-native';
import { Avatar, TextInput, Button, Text } from 'react-native-paper';
import Styles from '../styles/Styles';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import {
  changeHidePassword,
  changePassword,
  changeEmail,
} from '../redux/loginSlice';


const Login = ({ navigation }) => {
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
        source={require('../assets/img/logo.png')}
        style={Styles.logo}
      />
      <TextInput label="Correo electrónico" mode="outlined" style={Styles.input}
        onChangeText={text => dispatch(changeEmail(text))}
        value={email}
      />
      <TextInput
        label="Contraseña"
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
        Iniciar Sesión
      </Button>
      <View style={Styles.containerRowCenter}>
        <Text>¿No tiene una cuenta?</Text>
        <Button mode="text"
          color="#306BAC"
          onPress={() => navigation.navigate('Signup')}>
          Registrarse
        </Button>
      </View>
      <View style={Styles.containerRowCenter}>
        <Text>Olvide mi contraseña</Text>
        <Button
          mode="text"
          style={Styles.forgotPasswordButton}
          color="#306BAC"
          onPress={() => navigation.navigate('ForgotPassword')}>
          Cambiar contraseña
        </Button>
      </View>
    </View>
  );
};

export default Login;

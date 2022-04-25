import React from 'react';
import {ScrollView, View} from 'react-native';
import {TextInput, Button, Text, RadioButton} from 'react-native-paper';
import Styles from '../styles/Styles';
import {useSelector, useDispatch} from 'react-redux';
import {
  isDriver,
  changeName,
  changeEmail,
  changePassword,
  changePasswordConfirmation,
  changeCarPlate,
  changeCarModel,
  changeCarColor,
} from '../redux/signUpSlice';
import {signUp} from '../redux/userSlice';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const isDriverCheck = useSelector(state => state.signUp.driver);
  const name = useSelector(state => state.signUp.name);
  const email = useSelector(state => state.signUp.email);
  const password = useSelector(state => state.signUp.password);
  const passwordConfirmation = useSelector(
    state => state.signUp.passwordConfirmation,
  );
  const carPlate = useSelector(state => state.signUp.carPlate);
  const carModel = useSelector(state => state.signUp.carModel);
  const carColor = useSelector(state => state.signUp.carColor);

  const onCheck = value => {
    dispatch(dispatch(isDriver(value)));
  };
  const driverComponent = conductor => {
    if (conductor) {
      return (
        <>
          <TextInput
            label="Placa del vehiculo"
            mode="outlined"
            style={Styles.input}
            onChangeText={text => dispatch(changeCarPlate(text))}
            value={carPlate}
          />
          <TextInput
            label="Modelo del vehiculo"
            mode="outlined"
            style={Styles.input}
            onChangeText={text => dispatch(changeCarModel(text))}
            value={carModel}
          />
          <TextInput
            label="Color del vehiculo"
            mode="outlined"
            style={Styles.input}
            onChangeText={text => dispatch(changeCarColor(text))}
            value={carColor}
          />
        </>
      );
    } else {
      return null;
    }
  };

  const onPressSignUp = () => {
    if (
      name !== '' &&
      email !== '' &&
      password !== '' &&
      passwordConfirmation !== ''
    ) {
      if (password === passwordConfirmation) {
        const data = {
          name,
          email,
          password,
          passwordConfirmation,
          carPlate,
          carModel,
          carColor,
        };
        dispatch(signUp(data));
      } else {
        alert('Las contraseñas no coinciden');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={Styles.scrollView}>
      <View style={Styles.container}>
        <TextInput
          label="Name"
          mode="outlined"
          style={Styles.input}
          onChangeText={text => dispatch(changeName(text))}
          value={name}
        />
        <TextInput
          label="Email"
          mode="outlined"
          style={Styles.input}
          onChangeText={text => dispatch(changeEmail(text))}
          value={email}
        />
        <TextInput
          label="Password"
          secureTextEntry
          mode="outlined"
          right={<TextInput.Icon name="eye" />}
          style={Styles.input}
          onChangeText={text => dispatch(changePassword(text))}
          value={password}
        />
        <TextInput
          label="Confirm Password"
          secureTextEntry
          mode="outlined"
          right={<TextInput.Icon name="eye" />}
          style={Styles.input}
          onChangeText={text => dispatch(changePasswordConfirmation(text))}
          value={passwordConfirmation}
        />
        <Text style={Styles.text}>Deseo registrarme como:</Text>
        <RadioButton.Group
          onValueChange={value => onCheck(value)}
          value={isDriverCheck}>
          <RadioButton.Item
            label="Cliente"
            value={false}
            style={Styles.radioButton}
          />
          <RadioButton.Item
            label="Conductor"
            value={true}
            style={Styles.radioButton}
          />
        </RadioButton.Group>
        {driverComponent(isDriverCheck)}
        <Button
          mode="contained"
          onPress={() => onPressSignUp()}
          style={Styles.logginButton}>
          Sign Up
        </Button>
        <View style={Styles.containerRowCenter}>
          <Text>Already have an account?</Text>
          <Button mode="text" onPress={() => navigation.navigate('Login')}>
            Login
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

import React from 'react';
import { Avatar, Text, Button, Title, List } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Styles from '../styles/Styles';



const ProfileComponent = () => {
  const user = useSelector(state => state.user.user);

  const DriverComponent = conductor => {
    if (conductor) {
      return (
        <View style={Styles.containerColumn}>
          <Title style={Styles.textTitle}>Información del vehiculo</Title>
          <View style={Styles.containerRowSpaceBetween}>
            <Text style={Styles.text}>Placa: </Text>
            <Text style={Styles.text}>{user.carPlate}</Text>
          </View>
          <View style={Styles.containerRowSpaceBetween}>
            <Text style={Styles.text}>Modelo: </Text>
            <Text style={Styles.text}>{user.carModel}</Text>
          </View>
          <View style={Styles.containerRowSpaceBetween}>
            <Text style={Styles.text}>Color: </Text>
            <Text style={Styles.text}>{user.carColor}</Text>
          </View>
        </View>
      );
    }
    else {
      return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={Styles.scrollView}>
      <Avatar.Image
        size={150}
        source={{ uri: 'https://picsum.photos/200' }}
        style={Styles.avatarProfile}
      />
      <View style={Styles.containerColumn}>
        <Title style={Styles.textTitle}>{user.name}</Title>
        <View style={Styles.containerRowSpaceBetween}>
          <Text style={Styles.text}>Telefono: </Text>
          <Text style={Styles.text}>{user.telephone}</Text>
        </View>
        <View style={Styles.containerRowSpaceBetween}>
          <Text style={Styles.text}>Carrera: </Text>
          <Text style={Styles.text}>{user.career}</Text>
        </View>
        <View style={Styles.containerRowSpaceBetween}>
          <Text style={Styles.text}>Codigo: </Text>
          <Text style={Styles.text}>{user.code}</Text>
        </View>
        <Button
          mode="text"
          onPress={() => console.log('Editar')}
          style={Styles.editButton}>
          Editar
        </Button>
      </View>
      <View style={Styles.containerColumn}>
        <Title style={Styles.textTitle}>Descripción</Title>
        <Text style={Styles.text}>
          {user.description}
        </Text>
      </View>
      {DriverComponent(user.isDriver)}
    </ScrollView>
  );
};

export default ProfileComponent;

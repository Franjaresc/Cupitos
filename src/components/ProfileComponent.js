import React from 'react';
import {Avatar, Text, Button, Title} from 'react-native-paper';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Styles from '../styles/Styles';

const ProfileComponent = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.containerRowSpaceEvenly}>
        <Avatar.Image
          size={100}
          source={{uri: 'https://picsum.photos/200'}}
          style={Styles.avatarProfile}
        />
        <View style={Styles.containerColumn}>
          <Title>Pepito Perez</Title>
          <Text>Teléfono: 1234567890</Text>
          <Text>Carrera: Heladero</Text>
          <Text>Codigo: A00000001</Text>
          <Button
            mode="text"
            onPress={() => console.log('Editar')}
            style={Styles.editButton}>
            Editar
          </Button>
        </View>
      </View>
      <View style={Styles.containerColumn}>
        <Title>Descripción</Title>
        <Text style={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, urna eu aliquam consectetur, nisi nisi volutpat nisl, euismod
          aliquam eros nisl eu nisi.
        </Text>
      </View>
      <View style={Styles.containerColumn}>
        <Title>Información del vehiculo</Title>
        <View style={Styles.containerRowSpaceBetween}>
          <Text style={Styles.textBody}>Placa: </Text>
          <Text style={Styles.textBody}>A12345</Text>
        </View>
        <View style={Styles.containerRowSpaceBetween}>
          <Text style={Styles.textBody}>Modelo: </Text>
          <Text style={Styles.textBody}>Toyota Corolla</Text>
        </View>
        <View style={Styles.containerRowSpaceBetween}>
          <Text style={Styles.textBody}>Año: </Text>
          <Text style={Styles.textBody}>2020</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileComponent;

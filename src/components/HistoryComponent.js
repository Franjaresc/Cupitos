import React from "react";
import { View, FlatList } from 'react-native';
import Styles from '../styles/Styles';
import { Text, Avatar, Title, Button, Card, Paragraph } from 'react-native-paper';

const data = [
    {
        id: 1,
        name: 'Cupo 1',
        hour: '2:00 PM',
        destination: 'Caney',
        carPlate: 'placa',
        seats: 4
    },
    {
        id: 2,
        name: 'Cupo 2',
        hour: '2:00 PM',
        destination: 'Caney',
        carPlate: 'placa',
        seats: 4
    },
    {
        id: 3,
        name: 'Cupo 3',
        hour: '2:00 PM',
        destination: 'Caney',
        carPlate: 'placa',
        seats: 4
    }
];

const CuposList = () => {
    const LeftContent = () => <Avatar.Image size={50}
        source={{ uri: 'https://picsum.photos/200' }}
        style={Styles.avatarCupitos} />
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return (
                    <Card>
                        <Card.Title title={item.name} subtitle={item.hour} left={LeftContent} />
                        <Card.Cover source={{ uri: 'https://cdn.cnn.com/cnnnext/dam/assets/200206161826-google-maps-aplicaciones-mapas-waze-google-earth-mapquest-map-gps-portafolio-global-cnnee-00000000.jpg' }} />
                        <Card.Content>
                            <Title>{item.destination}</Title>
                            <Paragraph>{`Placa del vehiculo: ${item.carPlate}\nNumero de asientos: ${item.seats}`}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button color="#306BAC">Información</Button>
                            <Button color="#306BAC">Reportar</Button>
                        </Card.Actions>
                    </Card>
                );
            }}
        />

    )
};

const HistoryComponent = () => {
    return (
        <View style={Styles.container}>
            <CuposList />
        </View>
    )
}

export default HistoryComponent;
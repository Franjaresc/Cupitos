import React from "react";
import { View, FlatList } from 'react-native';
import Styles from '../styles/Styles';
import { FAB, Text, Avatar, Title, Button, Card, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

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
    },
    {
        id: 4,
        name: 'Cupo 4',
        hour: '2:00 PM',
        destination: 'Caney',
        carPlate: 'placa',
        seats: 4
    },
    {
        id: 5,
        name: 'Cupo 5',
        hour: '2:00 PM',
        destination: 'Caney',
        carPlate: 'placa',
        seats: 4
    },
    {
        id: 6,
        name: 'Cupo 6',
        hour: '2:00 PM',
        destination: 'Caney',
        carPlate: 'placa',
        seats: 4
    },
    {
        id: 7,
        name: 'Cupo 7',
        hour: '2:00 PM',
        destination: 'Caney',
        carPlate: 'placa',
        seats: 4
    },
    {
        id: 8,
        name: 'Cupo 8',
        hour: '2:00 PM',
        destination: 'Caney',
        carPlate: 'placa',
        seats: 4
    },
    {
        id: 9,
        name: 'Cupo 9',
        hour: '2:00 PM',
        destination: 'Caney',
        carPlate: 'placa',
        seats: 4
    },
];

const PublishCupo = (conductor) => {
    if (conductor) {
        return (
            <FAB
                style={Styles.publishButton}
                small={false}
                icon="plus"
                onPress={() => console.log('Pressed')}
                color="white"
            />
        );
    }
    else {
        return null;
    }
};

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
                        <Card.Cover source={{ uri: 'https://www.tendenciadigital.com.co/wp-content/uploads/2021/06/Mazda-CX30.jpg' }} />
                        <Card.Content>
                            <Title>{item.destination}</Title>
                            <Paragraph>{`Placa del vehiculo: ${item.carPlate}\nNumero de asientos: ${item.seats}`}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button color="#306BAC">Cancel</Button>
                            <Button color="#306BAC">Ok</Button>
                        </Card.Actions>
                    </Card>
                );
            }}
        />

    )
};



const HomeComponent = () => {
    const user = useSelector(state => state.user.user);
    return (
        <View style={Styles.container}>
            <CuposList />
            {PublishCupo(user.isDriver)}
        </View>

    );
}


export default HomeComponent;
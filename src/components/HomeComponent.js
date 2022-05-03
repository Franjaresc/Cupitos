import React from "react";
import { ScrollView, View, FlatList } from 'react-native';
import Styles from '../styles/Styles';
import { FAB, Text, Avatar, Title, Button } from 'react-native-paper';
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
            />
        );
    }
    else {
        return null;
    }
};

const CuposList = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return (
                    <View style={Styles.containerRowCupitos}>
                        <Avatar.Image
                            size={80}
                            source={{ uri: 'https://picsum.photos/200' }}
                            style={Styles.avatarCupitos}
                        />
                        <View style={Styles.containerColumnCupitos}>
                            <Title style={Styles.textTitleCupitos}>{item.name}</Title>
                            <View style={Styles.containerRowSpaceBetweenCupitos}>
                                <Text style={Styles.textCupitos}>Hora de salida: </Text>
                                <Text style={Styles.textCupitos}>{item.hour}</Text>
                            </View>
                            <View style={Styles.containerRowSpaceBetweenCupitos}>
                                <Text style={Styles.textCupitos}>Destino: </Text>
                                <Text style={Styles.textCupitos}>{item.destination}</Text>
                            </View>
                            <View style={Styles.containerRowSpaceBetweenCupitos}>
                                <Text style={Styles.textCupitos}>Placa: </Text>
                                <Text style={Styles.textCupitos}>{item.carPlate}</Text>
                            </View>
                            <View style={Styles.containerRowSpaceBetweenCupitos}>
                                <Text style={Styles.textCupitos}>Cupos disponibles: </Text>
                                <Text style={Styles.textCupitos}>{item.seats}</Text>
                            </View>
                            <View style={Styles.containerRowCupitosButton}>
                                <Button
                                    mode="text"
                                    onPress={() => console.log('Editar')}
                                    style={Styles.editButton}>
                                    Editar
                                </Button>
                                <Button
                                    mode="text"
                                    onPress={() => console.log('Editar')}
                                    style={Styles.editButton}>
                                    Editar
                                </Button>
                            </View>

                        </View>
                    </View>
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
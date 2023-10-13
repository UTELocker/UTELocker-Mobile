import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

const MapShowLocation = ({ location }) => {
    const [waitingCheckPermission, setWaitingCheckPermission] = useState(true);

    useEffect(() => {
        const permissionConfig = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            console.log(status);
            if (status !== 'granted') {
              Alert.alert('Permission to access location was denied');
              return;
            }
            setWaitingCheckPermission(false);
        }
        permissionConfig();
    }, []);

    if (waitingCheckPermission) {
        return <View />
    }

    return (
        <MapView
            style={{
                width: '100%',
                height: '100%',
            }}
            showsUserLocation={false}
            followsUserLocation={false}
            region={{
                latitude: parseFloat(location.latitude),
                longitude: parseFloat(location.longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                id='1'
                coordinate={{
                    latitude: parseFloat(location.latitude),
                    longitude: parseFloat(location.longitude),
                }}
            />
        </MapView>
    )
}

export default MapShowLocation
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect } from 'react';

const MapShowLocation = ({ location }) => {

    useEffect(() => {
        // const permissionConfig = async () => {
        //     let { status } = await Location.requestForegroundPermissionsAsync();
        //     if (status !== 'granted') {
        //       Alert.alert('Permission to access location was denied');
        //       return;
        //     }
        // }
        // permissionConfig();
    }, []);

    return (
        <MapView
            style={{
                width: '100%',
                height: '100%',
            }}
            showsUserLocation={false}
            followsUserLocation={false}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                }}
            />
        </MapView>
    )
}

export default MapShowLocation
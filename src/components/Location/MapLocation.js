import React from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

const MapLocation = ({
    currentLocation,
}) => {

    return (
        <View
            style={{
                width: '100%',
                height: '93%',
            }}
        >
            <MapView 
                style={{
                    width: '100%',
                    height: '100%',
                }}
                showsUserLocation={true}
                followsUserLocation={true}
                initialRegion={{
                    latitude: currentLocation?.coords.latitude,
                    longitude: currentLocation?.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 10.865214818755575,
                        longitude: 106.75934323179112,
                    }}
                    icon={require('../../../assets/images/icon_locker.png')}
                />
            </MapView>
        </View>
    )
}

export default MapLocation
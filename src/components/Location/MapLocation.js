import React from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

const MapLocation = ({
    currentLocation,
    locations
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
                {
                    currentLocation !== null ? (
                        locations.map((element, index) => (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: element.latitude,
                                    longitude: element.longitude,
                                }}
                                title={element.name}
                                description={element.address}
                            />
                        ))
                    ) : (
                        <></>
                    )
                }
            </MapView>
        </View>
    )
}

export default MapLocation
import React from 'react'
import { View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

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
                provider={PROVIDER_GOOGLE}
            >
                {
                    currentLocation !== null ? (
                        locations.map((element, index) => (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: parseFloat(element.latitude),
                                    longitude: parseFloat(element.longitude),
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
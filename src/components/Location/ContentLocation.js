import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Colors } from "../../constants/styles";
import { useState } from "react";
import MapView from 'react-native-maps';
import { useEffect } from "react";
import * as Location from 'expo-location';
import { getDistance, getPreciseDistance } from 'geolib';
import { getListLockers } from "../../api/locationApi";
import CardLocation from "./CardLocation";

const ContentLocation = () => {
    const [ typeLocationSearch, setTypeLocationSearch ] = useState('list')
    const [ permissionLocation, setPermissionLocation ] = useState(null)
    const [ currentLocation, setCurrentLocation ] = useState(null)
    const [ listLocker, setListLocker ] = useState({
        closest: [],
        other: [],
    }) 
    const [ isLoading, setIsLoading ] = useState(true)
    useEffect(() => {
        (async () => {
      
            let { status } = await Location.requestForegroundPermissionsAsync();
            setPermissionLocation(status);
            if (status !== 'granted') {
              Alert.alert('Permission to access location was denied');
              return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location);
            const listLockers = await getListLockers();
            let closest = [];
            let other = [];
            listLockers.forEach(element => {
                const distance = getPreciseDistance(
                    { latitude: currentLocation?.coords.latitude, longitude: currentLocation?.coords.longitude },
                    { latitude: element.latitude, longitude: element.longitude },
                );
                element.distance = distance/1000;
                if (distance < 1000) {
                    closest.push(element);
                } else {
                    other.push(element);
                }
            });
            closest.sort((a, b) => a.distance - b.distance);
            other.sort((a, b) => a.distance - b.distance);
            setListLocker({
                closest: closest,
                other: other,
            });
            setIsLoading(false);
        })();
    }, []);

    const SearchLocation = () => {
        const ButtonEnd = () => {
            switch (typeLocationSearch) {
                case 'list':
                    return (
                        <TouchableOpacity
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    width: '100%',
                                }}
                                onPress={() => setTypeLocationSearch('map')}
                            >
                                <Entypo
                                    name="location-pin"
                                    size={24}
                                    color="black"
                                />
                                <Text>Map</Text>
                            </TouchableOpacity>
                    )
                case 'map':
                    return (
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                width: '100%',
                            }}
                            onPress={() => setTypeLocationSearch('list')}
                        >
                            <Entypo
                                name="list"
                                size={24}
                                color="black"
                            />
                            <Text>List</Text>
                        </TouchableOpacity>
                    )
                default:
                    return (
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                width: '100%',
                            }}
                            onPress={() => {
                                const type = typeLocationSearch.split('-')[0];
                                setTypeLocationSearch(type);
                            }}
                        >
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    )
            }
        }

        return (
            <View
                style={{
                    width: '100%',
                    height: '7%',
                    backgroundColor: Colors.primary,
                    flexDirection: 'row',
                    paddingBottom: 10,
                }}
            >
                <View
                    style={{
                        flex: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        borderRadius: 30,
                        backgroundColor: Colors.white,
                        marginHorizontal: 10,                            
                    }}
                >
                    <TextInput
                        style={{
                            flex: 6,
                            width: 300,
                            height: 50,
                            paddingLeft: 20,
                            fontSize: 18,
                        }}
                        placeholder="Search Location"
                        onFocus={() => {
                            if (typeLocationSearch.indexOf('-search') === -1) {
                                const type = typeLocationSearch + '-search';
                                setTypeLocationSearch(type);
                            }
                        }}

                    />
                    <Entypo 
                        style={{
                            flex: 1,
                            alignContent: 'flex-end',
                        }} 
                        name="magnifying-glass" 
                        size={24} 
                        color="black" 
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        backgroundColor: Colors.white,
                        marginRight: 10,
                    }}
                >
                   <ButtonEnd />
                </View>
            </View>
        )
    }

    const Content = () => {
        if (isLoading) {
            return (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text>Loading...</Text>
                </View>
            )
        }
        if (typeLocationSearch === 'list') {
            return (
                <View
                    style={{
                        width: '100%',
                        height: '93%',
                        paddingHorizontal: 15,
                        paddingTop: 10,
                    }}
                >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>Closest</Text>
                    {
                        listLocker.closest.length > 0 ? (
                            <FlatList
                                data={listLocker.closest}
                                renderItem={({ item }) => <CardLocation location={item} />}
                                keyExtractor={item => item.id}
                            />
                        ) : (
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginBottom: 10,
                                }}
                            >No data</Text>
                        )
                    }
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>Other</Text>
                    {
                        listLocker.other.length > 0 ? (
                            <FlatList
                                data={listLocker.other}
                                renderItem={({ item }) => <CardLocation location={item} />}
                                keyExtractor={item => item.id}
                            />
                        ) : (
                            <Text>No data</Text>
                        )
                    }
                </View>
            )
        } else if (typeLocationSearch === 'map') {
            return (
                <View
                    style={{
                        width: '100%',
                        height: '93%',
                    }}
                >
                    <MapView 
                        style={styles.map}
                        showsUserLocation={true}
                        followsUserLocation={true}
                        initialRegion={{
                            latitude: currentLocation?.coords.latitude,
                            longitude: currentLocation?.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
            )
        } else {
            const listLocation = listLocker.closest.concat(listLocker.other);
            return (
                <View
                    style={{
                        width: '100%',
                        height: '93%',
                        paddingHorizontal: 15,
                        paddingTop: 10,
                    }}
                >
                    {
                        listLocation.length > 0 ? (
                            <FlatList
                                data={listLocation}
                                renderItem={({ item }) => <CardLocation location={item} />}
                                keyExtractor={item => item.id}
                            />
                        ) : (
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginBottom: 10,
                                }}
                            >No data</Text>
                        )
                    }
                </View>
            )
        }
    }


    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <SearchLocation />
            <Content />
        </View>
    )
}

export default ContentLocation

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
})
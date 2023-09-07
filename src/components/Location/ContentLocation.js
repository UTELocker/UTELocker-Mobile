import { Alert, FlatList, StyleSheet, Text, } from "react-native"
import { View } from "react-native"
import { useState } from "react";
import { useEffect } from "react";
import * as Location from 'expo-location';
import { getDistance, getPreciseDistance } from 'geolib';
import { getListLockers } from "../../api/locationApi";
import SearchLocation from "./SearchLocation";
import ListLocation from "./ListLocation";
import MapLocation from "./MapLocation";
import ListLocationSearch from "./ListLocationSearch";

const ContentLocation = () => {
    const [ typeLocationSearch, setTypeLocationSearch ] = useState('list')
    const [ currentLocation, setCurrentLocation ] = useState(null)
    const [ listLocker, setListLocker ] = useState({
        closest: [],
        other: [],
    }) 

    useEffect(() => {
        const permissionConfig = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('Permission to access location was denied');
              return;
            }
            let location = await Location.getCurrentPositionAsync({});

            const listLockers = getListLockers();
            let closest = [];
            let other = [];
            console.log('listLockers', listLockers);
            listLockers.forEach(element => {
                distance = getPreciseDistance(
                    { latitude: location?.coords.latitude, longitude: location?.coords.longitude },
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
            
            setCurrentLocation(location);
        }
        permissionConfig();
    }, []);
    
    const Content = () => {
        switch (typeLocationSearch) {
            case 'list':
                return <ListLocation listLocker={listLocker} />
            case 'map':
                return <MapLocation currentLocation={currentLocation} />
            default:
                return <ListLocationSearch listLocker={listLocker} />
        }
    }

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <SearchLocation
                typeLocationSearch={typeLocationSearch}
                setTypeLocationSearch={setTypeLocationSearch}
            />
            {
                currentLocation === null ? (
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
                : (
                    <Content />
                )                
            }
        </View>
    )
}

export default ContentLocation

const styles = StyleSheet.create({})
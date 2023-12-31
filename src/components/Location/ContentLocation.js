import { Alert, FlatList, StyleSheet, Text, View} from "react-native"
import { useState, useEffect } from "react";
import * as Location from 'expo-location';
import { getPreciseDistance } from 'geolib';
import { getListLockers } from "../../api/locationApi";
import SearchLocation from "./SearchLocation";
import ListLocation from "./ListLocation";
import MapLocation from "./MapLocation";
import ListLocationSearch from "./ListLocationSearch";
import {STATUS_CODE} from "../../constants/systemConstant";

const ContentLocation = () => {
    const [ typeLocationSearch, setTypeLocationSearch ] = useState('list')
    const [ currentLocation, setCurrentLocation ] = useState(null)
    const [ listLocker, setListLocker ] = useState({
        closest: [],
        other: [],
    })
    const [ locationFilter, setLocationFilter ] = useState('')

    useEffect(() => {

        const permissionConfig = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('Permission to access location was denied');
              return;
            }
            let location = await Location.getCurrentPositionAsync({});

            const fetchLocations = await getListLockers();
            if (fetchLocations.status == STATUS_CODE.OK) {
                let closest = [];
                let other = [];
                const listLockers = fetchLocations.data.data;
                listLockers.forEach(element => {
                    distance = getPreciseDistance(
                        { latitude: location?.coords.latitude, longitude: location?.coords.longitude },
                        { latitude: element.latitude, longitude: element.longitude },
                    );
                    element.distance = distance/1000;
                    if (distance < 1500) {
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
            }
            setCurrentLocation(location);
        }
        permissionConfig();
    }, []);
    
    const Content = () => {
        switch (typeLocationSearch) {
            case 'list':
                return <ListLocation listLocker={listLocker} />
            case 'map':
                return <MapLocation 
                    currentLocation={currentLocation}
                    locations={listLocker.closest.concat(listLocker.other)}
                />
            default:
                return <ListLocationSearch 
                        listLocker={listLocker}
                        locationFilter={locationFilter}
                    />
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
                setLocationFilter={setLocationFilter}
                locationFilter={locationFilter}
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
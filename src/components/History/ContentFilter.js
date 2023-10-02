import { useState } from 'react';
import { FILTER_LOCATION, FILTER_METHOD, FILTER_MOTH, FILTER_STATUS, FILTER_TYPE_TRANSFER } from '../../constants/fieldFilter';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/styles';
import DropdownComponent from "../Auth/DropdownComponent";
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const ContentFilter = ({ setFilters, filters, listLocation }) => {
    const navigation = useNavigation();
    const [moth, setMoth] = useState(filters.moth);
    const [location, setLocation] = useState(filters.location);
    const [typeTransfers, setTypeTransfers] = useState(filters.typeTransfers);
    const [status, setStatus] = useState(filters.status);
    const [method, setMethod] = useState(filters.method);
    const locations = FILTER_LOCATION.concat(listLocation);

    return (
        <View
            style={styles.container}
        >
            <Text>By moth</Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {
                    FILTER_MOTH.map((item, index) => (
                        <Text
                            key={index}
                            onPress={() => {
                                setMoth(item.value);
                            }}
                            style={[
                                styles.cardFilter,
                                {
                                    backgroundColor: item.value === moth ? Colors.primary : Colors.white,
                                }
                            ]}
                        >
                            {item.label}
                        </Text>
                    ))
                }
            </View>
            <Text>By location</Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
            <DropdownComponent
                placeholder={'Select Location'}
                setValue={setLocation}
                value={location}
                list={locations}
                logo={
                    <Entypo
                        name="location-pin"
                        size={24}
                        color="black"
                    />
                }
                border={false}
            />

            </View>
            <Text>By type transfer</Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {
                    FILTER_TYPE_TRANSFER.map((item, index) => (
                        <Text
                            key={index}
                            onPress={() => {
                                setTypeTransfers(item.value);
                            }}
                            style={[
                                styles.cardFilter,
                                {
                                    backgroundColor: item.value === typeTransfers ?
                                    Colors.primary :
                                    Colors.white,
                                }
                            ]}
                        >
                            {item.label}
                        </Text>
                    ))
                }
            </View>
            <Text>By status</Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {
                    FILTER_STATUS.map((item, index) => (
                        <Text
                            key={index}
                            onPress={() => {
                                setStatus(item.value);
                            }}
                            style={[
                                styles.cardFilter,
                                {
                                    backgroundColor: item.value === status ?
                                        Colors.primary :
                                        Colors.white,
                                }
                            ]}
                        >
                            {item.label}
                        </Text>
                    ))
                }
            </View>
            <Text>By method</Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {
                    FILTER_METHOD.map((item, index) => (
                        <Text
                            key={index}
                            onPress={() => {
                                setMethod(item.value);
                            }}
                            style={[
                                styles.cardFilter,
                                {
                                    backgroundColor: item.value === method ?
                                        Colors.primary :
                                        Colors.white,
                                }
                            ]}
                        >
                            {item.label}
                        </Text>
                    ))
                }
            </View>
            <View
                style={styles.containerButton}
            >
                <Text
                    onPress={() => {
                        setFilters({
                            moth,
                            location,
                            typeTransfers,
                            status,
                            method,
                        });
                        navigation.goBack();
                    }}
                    style={[
                        styles.buttonTitle,
                        {
                            backgroundColor: Colors.primary,
                        }
                    ]}
                >
                    Apply
                </Text>
                <Text
                    onPress={() => {
                        setMoth(FILTER_MOTH[0].value);
                        setLocation(FILTER_LOCATION[0].value);
                        setTypeTransfers(FILTER_TYPE_TRANSFER[0].value);
                        setStatus(FILTER_STATUS[0].value);
                        setMethod(FILTER_METHOD[0].value);
                    }}
                    style={[
                        styles.buttonTitle,
                        {
                            backgroundColor: Colors.red,
                        }
                    ]}
                >
                    Clear all
                </Text>
            </View>                    
        </View>
    )
}

export default ContentFilter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    cardFilter: {
        backgroundColor: Colors.white,
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    buttonTitle: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        color: Colors.white,
        marginRight: 10,
    },
    containerButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        justifyContent: 'flex-end',
        paddingBottom: 15,
        flexDirection: 'row',
    }
})
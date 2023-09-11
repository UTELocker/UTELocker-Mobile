import { Alert, Linking, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Colors } from "../../constants/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import STATUS_LOCKER from "../../constants/statusBooking";
import MapView, { Marker } from 'react-native-maps';

const CardDetailBooking = ({ history }) => {
    console.log(history);
    const stylesStatus = (status) => {
        switch (status) {
            case STATUS_LOCKER.FINISHED:
                return {
                    backgroundColor: 'green',
                }
            case STATUS_LOCKER.CANCEL:
                return {
                    backgroundColor: 'orange',
                }
            case STATUS_LOCKER.PENDING:
                return {
                    backgroundColor: 'yellow',
                }
            default:
                return {
                    backgroundColor: 'red',
                }
        }
    }

    const handleStatus = (status) => {
        switch (status) {
            case STATUS_LOCKER.FINISHED:
                return 'Finished';
            case STATUS_LOCKER.CANCEL:
                return 'Cancel';
            case STATUS_LOCKER.PENDING:
                return 'Pending';
            default:
                return 'Error';
        }
    }

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.card}
            >
                <View
                    style={styles.cardHeader}
                >
                    <View
                        style={{
                            height: '60%',
                            width: '18%',
                            borderWidth: 1,
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10,
                        }}
                    >
                        <MaterialCommunityIcons 
                            name="locker" 
                            size={35} 
                            color="black"
                        />
                    </View>
                    <Text
                        style={styles.cardTitle}
                    >
                        Locker: {history.locker}
                    </Text>
                </View>
                <View
                    style={styles.cardBody}
                >
                    <View
                        style={[
                            styles.containerText,
                            { marginBottom: 10}
                        ]}
                    >
                        <Text
                            style={styles.cardField}
                        >
                            Status:
                        </Text>
                        <Text
                            style={[
                                styles.textStatus,
                                stylesStatus(history.status)
                            ]}
                        >
                            {handleStatus(history.status)}
                        </Text>
                    </View>

                    <View
                        style={styles.containerText}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderRadius: 10,
                                backgroundColor: Colors.primary500,
                                padding:10,
                                marginBottom: 10,
                            }}
                        >
                            <View
                                style={{
                                    flex:1,
                                    alignItems: 'center',
                                }}
                            >
                                <Text>
                                    {history.time.start.date}
                                </Text>
                                <Text>
                                    {history.time.start.time}
                                </Text>
                            </View>
                            <Text
                                style={{
                                    flex:1,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}
                            >
                                -
                            </Text>
                            <View
                                style={{
                                    flex:1,
                                    alignItems: 'center',
                                }}
                            >
                                {
                                    history.time.end.date !== '' ? (
                                        <>
                                            <Text>
                                                {history.time.end.date}
                                            </Text>
                                            <Text>
                                                {history.time.end.time}
                                            </Text>
                                        </>
                                    ) : (
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                color: Colors.gray,
                                            }}
                                        >
                                            Not yet
                                        </Text>
                                    )
                                }
                            </View>
                        </View>
                    </View>

                    <View
                        style={styles.containerText}
                    >
                        <Text
                            style={styles.cardField}
                        >
                            Address:
                        </Text>
                        <Text
                            style={styles.cardText}
                        >
                            {history.address}
                        </Text>
                    </View>

                    <View
                        style={styles.containerText}
                    >
                        <Text
                            style={styles.cardField}
                        >
                            Times open:
                        </Text>
                        <Text
                            style={styles.cardText}
                        >
                            {history.timesOpen}
                        </Text>
                    </View>
                    
                    <View
                        style={styles.containerText}
                    >
                        <Text
                            style={styles.cardField}
                        >
                            Price:
                        </Text>
                        <Text
                            style={styles.cardText}
                        >
                            {history.price}đ
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={styles.cardFooter}
                onPress={() => {
                    Alert.alert(
                        "Contact Support",
                        "Do you want to call to support?",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => {
                                const phone = '0382349463';
                                Linking.openURL(`tel:${phone}`)

                            } }
                        ]
                    )
                }}
            >
                <Text
                    style={styles.titleFooter}
                >
                    Contact Support
                </Text>
            </TouchableOpacity>
            <View
                style={styles.cardMap}
            >
                <MapView 
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    showsUserLocation={false}
                    followsUserLocation={false}
                    initialRegion={{
                        latitude: history.location.latitude,
                        longitude: history.location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: history.location.latitude,
                            longitude: history.location.longitude,
                        }}
                        title={history.locker}
                        description={history.address}
                    />
                </MapView>
            </View>
        </View>        
    )
}

export default CardDetailBooking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    card: {
        width: '90%',
        height: '50%',
        backgroundColor: Colors.white,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        padding: 20
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary500,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardField: {
        fontSize: 16,
        color: Colors.gray,
    },
    textStatus: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardFooter: {
        width: '90%',
        height: '5%',
        backgroundColor: Colors.lightBlue,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleFooter: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    cardMap: {
        marginTop: 10,
        width: '90%',
        height: '35%',
        backgroundColor: Colors.lightGray,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        padding: 20,
    }
})
import { View, StyleSheet, Image, Text } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

const CardLocation = ({ location, isCloset = false}) => {
    if (isCloset) console.log('isCloset');
    return (
        <View
            style={styles.container}
        >
            <Image
                src="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
                style={styles.image}
            />
            <View
                style={{
                    flex: 7,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginStart: 10,
                }}
            >
                <Text style={styles.name}>{location.name}</Text>
                <Text >{location.address}</Text>
                <Text style={{
                    color: location.status === 'Available' ? 'green' : 'red',
                }}>{location.status}</Text>
                <Text style={styles.distance}>{location.distance} km</Text>
            </View>
        </View>
    )
}

export default CardLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 120,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    image: {
        flex: 3,
        width: '100%',
        backgroundColor: '#0553',
        borderRadius: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
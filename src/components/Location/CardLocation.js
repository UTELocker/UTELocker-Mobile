import { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

const CardLocation = ({ location, isCloset = false}) => {
    
    const [ showAllDescription, setShowAllDescription ] = useState(false);

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
                <Text style={styles.name}>{location.code}</Text>
                <Text 
                    onPress={() => {
                        setShowAllDescription(true);
                    }}
                >
                    {
                        showAllDescription ? location.description : location.description.substring(0, 50) + '...'
                    }
                </Text>
                <Text style={{
                    color: location.lockers.length === 0 ? 'red' : 'green',
                }}>
                    {location.lockers.length === 0 ? 'Not Available' : 'Available'}</Text>
                <Text style={styles.distance}>{location.distance} km</Text>
            </View>
        </View>
    )
}

export default CardLocation;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
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
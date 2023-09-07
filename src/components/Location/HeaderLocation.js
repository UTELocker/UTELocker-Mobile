import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../../constants/styles"
import Notification from "../ui/Notification"

const HeaderLocation = ({}) => {
    return (
        <View
            style={styles.header}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-start',
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white', 
                    }}
                >
                    Location
                </Text>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-end',
                }}
            >
                <Notification />
            </View>
        </View>
    )
}

export default HeaderLocation

const styles = StyleSheet.create({
    header : {
        paddingTop: 20,
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.white,
    },
    buttonNotification: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

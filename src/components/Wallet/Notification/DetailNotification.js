import { Text, View } from "react-native"
import { Colors } from "../../../constants/styles";

const DetailNotification = ({ item }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Colors.white,
                paddingHorizontal: 20,
            }}
        >
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                }}
            >
                {item.title}
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    color: '#a8a8a8'
                }}
            >
                {item.date}
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    marginTop: 10,
                }}
            >
                {item.description}
            </Text>
        </View>
    )
}

export default DetailNotification;
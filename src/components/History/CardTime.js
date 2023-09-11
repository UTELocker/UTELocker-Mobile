import { Text, View } from "react-native";
import { Colors } from "../../constants/styles";

const CardTime = ({ time }) => {
    return (
        <View
            style={{
                height: 50,
                width: '100%',
                backgroundColor: '#CDCDCD',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
            }}
        >
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: Colors.white,
                }}
            >
                {time}
            </Text>
        </View>
    );
}

export default CardTime;
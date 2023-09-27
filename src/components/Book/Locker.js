import { ImageBackground, Pressable, View } from "react-native";
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../constants/styles";

const Locker = ({
    locker,
    setLocker,
    width = 100,
}) => {
    return (
        <Pressable
            style={{
                margin: 10,
                padding: 10,
                width: width,
                height: 100,
            }}
            onPress={() => console.log('short press')}
            onLongPress={() => console.log('long press')}
        >
            <Text>
                {locker.name}
            </Text>
        </Pressable>
    )
};

export default Locker;


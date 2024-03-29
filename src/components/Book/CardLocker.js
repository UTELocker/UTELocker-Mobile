import { Pressable, Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

const CardLocker = ({ locker, date }) => {
    const { id, address, locker_slots_count } = locker;

    const navigation = useNavigation();
    return (
        <Pressable
            style={{
                width: '100%',
                height: 160,
                backgroundColor: '#fff',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                marginBottom: 20,
            }}
            onPress={() => {
                navigation.navigate('SelectBooking', {
                    locker: locker,
                    date: date,
                });
            }}
        >
            <View
                style={{
                    height: '60%',
                    width: '25%',
                    borderWidth: 1,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <MaterialCommunityIcons 
                    name="locker" 
                    size={35} 
                    color="black"
                />
            </View>
            <View
                style={{
                    height: '75%',
                    width: '75%',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    paddingStart: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >
                    Locker
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        color: Colors.gray,
                    }}
                >
                    {address}
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        color: Colors.gray,
                    }}
                >
                    Available lockers: {locker_slots_count}
                </Text>
            </View>
        </Pressable>
    )
}

export default CardLocker

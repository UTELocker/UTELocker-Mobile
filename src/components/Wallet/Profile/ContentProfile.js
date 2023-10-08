import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from "../../../constants/styles";
import { useNavigation } from "@react-navigation/native";

const ContentProfile = () => {
    const navigation = useNavigation();
    const CONST_PROFILE = [
        { 
            title: 'Profile',
            icon: 'user-alt',
            navigate: 'DetailProfile',
        },
        {
            title: 'Support',
            icon: 'question-circle',
            navigate: 'Support',
        },
        {
            title: 'Settings',
            icon: 'cog',
            navigate: 'DetailSetting',
        },
        {
            title: 'About',
            icon: 'info-circle',
            navigate: 'DetailAbout',
        }
    ]
    return (
        <View>
            <FlatList
                data={CONST_PROFILE}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBlockColor: '#a8a8a8',
                                borderBottomWidth: 1,
                                paddingVertical: 15,
                                paddingHorizontal: 20,
                                backgroundColor: Colors.white,
                            }}
                            onPress={() => {
                                navigation.navigate(item.navigate);
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <FontAwesome5 name={item.icon} size={24} color={Colors.gray} />
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '400',
                                        marginLeft: 10,
                                    }}
                                >
                                    {item.title}
                                </Text>
                            </View>
                            <FontAwesome5 name="chevron-right" size={24} color={Colors.gray} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.title}
            />
        </View>
    )
}

export default ContentProfile;
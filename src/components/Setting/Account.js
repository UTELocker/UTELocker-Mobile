import CardSetting from "../ui/CardSetting";
import { View, StyleSheet, Text, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { setLogout } from "../../redux/authSlice";
import { logout } from "../../api/authAPi";

const Account = () => {
    const dispatch = useDispatch();
    const data = [
        {
            id: '1',
            title: 'personal Information',
            icon: <MaterialCommunityIcons name="account-eye-outline" size={24} color="black" />,
            nameTab: 'Account',
        },
        {
            id: '2',
            title: 'Settings',
            icon: <Feather name="settings" size={24} color="black" />,
            nameTab: 'SettingApp',
        },
        {
            id: '3',
            title: 'Logout',
            icon: <SimpleLineIcons name="logout" size={24} color="black" />,
            nameTab: 'Logout',
            onPress: async () => {
                const res = await logout();
                console.log(res);
                if (res.status === 'success') {
                    dispatch(setLogout());
                } else {
                    Alert.alert('Error', 'Logout failed');
                }
            }
        },
    ];

    return (
        <View
            style={styles.rootContainer}
        >
            <Text
                style={styles.title}
            >
                Account
            </Text>
            <CardSetting
                data={data}
            />
        </View>
    )
}

export default Account;

const styles = StyleSheet.create({
    rootContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

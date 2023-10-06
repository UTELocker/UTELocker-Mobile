import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import HomeStack from './HomeStack';
import HistoryStack from './HistoryStack';
import NotificationStack from './NotificationStack';
import ProfileStack from './ProfileStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../../constants/styles';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function WalletTab() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: "none"
            }
          });
          return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
          });
    }, []);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
    
                    switch (route.name) {
                        case 'Home':
                            iconName = focused
                            ? 'home'
                            : 'home-outline';
                            break;
                        case 'Profile':
                            iconName = focused
                            ? 'ios-person'
                            : 'person-outline';
                            break;
                        case 'Notification':
                            iconName = focused
                            ? 'md-notifications'
                            : 'md-notifications-outline';
                            break;
                        case 'History':
                            iconName = focused
                            ? 'time'
                            : 'time-outline';
                            break;
                        default:
                            iconName = '';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Colors.blue,
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarLabel: ({ focused, color }) => {
                    let labelName;
                    switch (route.name) {
                        case 'Home':
                            labelName = 'Home';
                            break;
                        case 'Notification':
                            labelName = 'Notification';
                            break;
                        case 'Profile':
                            labelName = 'Profile';
                            break;
                        case 'History':
                            labelName = 'History';
                            break;
                        default:
                            labelName = '';
                    }
                    return (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: focused ? Colors.blue : Colors.gray,
                                    fontSize: 12,
                                }}
                            >
                                {labelName}
                            </Text>
                        </View>
                    );
                },
                tabBarStyle: {
                    height: '6%',
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    elevation: 0,
                    paddingTop: 5,
                },
                tabBarHideOnKeyboard: true,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
            />
            <Tab.Screen
                name="History"
                component={HistoryStack}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
            />
        </Tab.Navigator>
    );
}

export default WalletTab;

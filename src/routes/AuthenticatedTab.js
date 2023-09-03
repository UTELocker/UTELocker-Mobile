import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import { Colors } from '../constants/styles';
import SettingsStack from './SettingsStack';
import LocationScreen from '../screens/LocationScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

function AuthenticatedTab() {
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
                    case 'Settings':
                        iconName = focused
                        ? 'settings'
                        : 'settings-outline';
                        break;
                    case 'Location':
                        iconName = focused
                        ? 'location'
                        : 'location-outline';
                        break;
                    case 'History':
                        iconName = focused
                        ? 'time'
                        : 'time-outline';
                        break;
                    default:
                        return (
                            <View
                                style={{
                                    position: 'absolute',
                                    top: '-150%',
                                }}

                            >
                                <Ionicons name="add-circle-sharp" size={80} color={Colors.darkBlue} />
                            </View>
                        );
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
                    case 'Settings':
                        labelName = 'Settings';
                        break;
                    case 'Location':
                        labelName = 'Location';
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
            }
          })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
            />
            <Tab.Screen
                name="Location"
                component={LocationScreen}
            />
            <Tab.Screen
                name="Add"
                component={SettingsStack}
            />
            <Tab.Screen
                name="History"
                component={HistoryScreen}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsStack}
            />
        </Tab.Navigator>
    );
}

export default AuthenticatedTab;

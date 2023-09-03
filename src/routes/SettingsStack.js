import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator();

function SettingsStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator>
    );
}

export default SettingsStack;
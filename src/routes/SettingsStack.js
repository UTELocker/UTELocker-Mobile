import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '../screens/Setting/SettingScreen';

const Stack = createNativeStackNavigator();

function SettingsStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="SettingsApp" component={SettingScreen} />
        </Stack.Navigator>
    );
}

export default SettingsStack;
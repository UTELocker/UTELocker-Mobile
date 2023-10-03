import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '../screens/Setting/SettingScreen';
import RuleScreen from '../screens/Setting/RuleScreen';
import ContactScreen from '../screens/Setting/ContactScreen';

const Stack = createNativeStackNavigator();

function SettingsStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="SettingsApp" component={SettingScreen} />
            <Stack.Screen name="SettingsRule" component={RuleScreen} />
            <Stack.Screen name="SettingsContact" component={ContactScreen} />
        </Stack.Navigator>
    );
}

export default SettingsStack;
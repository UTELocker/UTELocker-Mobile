import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailLockerScreen from '../screens/Home/DetailLockerScreen';
import ScannerScreen from '../screens/ScannerScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import WalletTab from './Wallet/WalletTab';
import WithDrawScreen from '../screens/UTEPay/FeaturePayment/WithDrawScreen';
import TopUpScreen from '../screens/UTEPay/FeaturePayment/TopUpScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="HomeApp" component={HomeScreen} />
            <Stack.Screen name="DetailLocker" component={DetailLockerScreen} />
            <Stack.Screen name="Scanner" component={ScannerScreen} />
            <Stack.Screen 
                name="WalletApp" 
                component={WalletTab}
                options={{
                    animation: 'slide_from_right'
                }}
            />
            <Stack.Screen name="Withdraw" component={WithDrawScreen} />
            <Stack.Screen name="TopUp" component={TopUpScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;

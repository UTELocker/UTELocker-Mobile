import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/UTEPay/Home/HomeScreen';
import DetailHistoryScreen from '../../screens/UTEPay/History/DetailHistoryScreen';
import WithDrawScreen from '../../screens/UTEPay/FeaturePayment/WithDrawScreen';
import TopUpScreen from '../../screens/UTEPay/FeaturePayment/TopUpScreen';
import TransferScreen from '../../screens/UTEPay/FeaturePayment/TransferScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="HomeWallet" component={HomeScreen} />
            <Stack.Screen name="DetailHistory" component={DetailHistoryScreen} />
            <Stack.Screen name="Withdraw" component={WithDrawScreen} />
            <Stack.Screen name="TopUp" component={TopUpScreen} />
            <Stack.Screen name="Transfer" component={TransferScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;

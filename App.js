import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './src/redux/store';
import AuthTab from './src/routes/AuthTab';
import AuthenticatedTab from './src/routes/AuthenticatedTab';
import { useEffect, useState } from 'react';
import { userDetail } from './src/api/authAPi';
import { setLogin } from './src/redux/authSlice';
import * as SecureStore from 'expo-secure-store';
import SplashScreen from './src/screens/SplashScreen';

function Navigation() {
  const [ isLoading, setIsLoading ] = useState(true);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const token = await SecureStore.getItemAsync('token');
      const res = await userDetail();
      if (res.message !== 'Unauthenticated.') {
        dispatch(setLogin({
            token: token,
            email: res.data.email,
            name: res.data.name,
            phone: res.data.phone,
            address: res.data.address,
          }));
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  // if (isLoading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      {/* {isLogin ? <AuthenticatedTab /> : <AuthTab />} */}
      <AuthenticatedTab />
    </NavigationContainer>
  );
}

function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
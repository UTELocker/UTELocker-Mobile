import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './src/redux/store';
import AuthTab from './src/routes/AuthTab';
import AuthenticatedTab from './src/routes/AuthenticatedTab';
import { useEffect, useState } from 'react';
import { userDetail } from './src/api/authAPi';
import { setLogin } from './src/redux/authSlice';
import SplashScreen from './src/screens/SplashScreen';
import STATUS_CODE from './src/constants/statusCode';
import NetInfo from "@react-native-community/netinfo";
import ModalError from './src/components/ui/ModalError';

function Navigation() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const [modalVisible, setModalVisible] = useState(false)
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isConnected) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [isConnected]);

  useEffect(() => {
    const fetchUser = async () => {
      console.log('fetch user');
      const res = await userDetail();
      switch (res.status) {
        case STATUS_CODE.OK:
          dispatch(setLogin({
            email: res.data.email,
            name: res.data.name,
            phone: res.data.phone,
            address: res.data.address,
          }));
          break;
        default:
          break;
      }
    };
    if (isConnected) {
      fetchUser();
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {isLogin ? <AuthenticatedTab /> : <AuthTab />}
      <ModalError 
        title='No Internet Connection'
        titleButton='OK'
        message='Please check your internet connection' 
        show={modalVisible} 
        onClose={() => {
          if (isConnected) {
            setModalVisible(false);
          }
        }} 
      />
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
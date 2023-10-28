import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './src/redux/store';
import AuthTab from './src/routes/AuthTab';
import AuthenticatedTab from './src/routes/AuthenticatedTab';
import { useEffect, useState, useRef } from 'react';
import { userDetail } from './src/api/authAPi';
import { setLogin, setLogout } from './src/redux/authSlice';
import SplashScreen from './src/screens/SplashScreen';
import {STATUS_CODE} from "./src/constants/systemConstant";
import NetInfo from "@react-native-community/netinfo";
import ModalError from './src/components/ui/ModalError';
import ModalNoti from './src/components/ui/ModalNoti';

function Navigation() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const [modalVisible, setModalVisible] = useState(false)
  const isLogin = useSelector((state) => state.auth.isLogin);
  const notification = useSelector((state) => state.notification);
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
      const res = await userDetail();
      switch (res.status) {
        case STATUS_CODE.OK:
          dispatch(setLogin(res.data.data));
          break;
        case STATUS_CODE.UNAUTHORIZED:
          dispatch(setLogout());
          break;
        default:
          break;
      }
      setIsLoading(false);
    };
    if (isConnected) {
      fetchUser();
    } else {
      setIsLoading(false);
    }
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
      <ModalNoti
        title={notification.title}
        titleButton='OK'
        message={notification.message}
        show={notification.show}
        isReturnHome={notification.isReturnHome}
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

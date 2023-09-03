import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './src/redux/store';
import AuthTab from './src/routes/AuthTab';
import AuthenticatedTab from './src/routes/AuthenticatedTab';
import * as SecureStore from 'expo-secure-store';

const checkLogin = () => {
  const dispatch = useDispatch();
  return async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      if (token) {
        dispatch(setIsLogin(token));
      }
    } catch (error) {
      // to proper action on failure case
    }
  }
}

function Navigation() {
  checkLogin();
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log('isLogin', isLogin);
  return (
    <NavigationContainer>
      {isLogin ? <AuthenticatedTab /> : <AuthTab />}
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
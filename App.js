import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider, useSelector } from "react-redux";
import { store } from './src/redux/store';
import AuthStack from './src/routes/AuthStack';
import AuthenticatedStack from './src/routes/AuthenticatedStack';

function Navigation() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <NavigationContainer>
      {isLogin ? <AuthenticatedStack /> : <AuthStack />}
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
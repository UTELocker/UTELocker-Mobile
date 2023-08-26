import { login } from '../api/authAPi';
import AuthContent from '../components/Auth/AuthContent';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../redux/authSlice';
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function LoginScreen({navigation}) {
  const [isLoadingOverlayVisible, setIsLoadingOverlayVisible] = useState(false);
  const dispatch = useDispatch();

  const onAuthenticate = async (credentials) => {
    const { email, password } = credentials;
    setIsLoadingOverlayVisible(true);
    const res = await login(email, password);
    if (res.status === 'success') {
      dispatch(setIsLogin(res.data.token));
      setIsLoadingOverlayVisible(false);
    } else {
      Alert.alert('Login failed', res.message);
    }
  }

  if (isLoadingOverlayVisible) {
    return (
      <LoadingOverlay message={'Logging in...'} />
    );
  }

  return <AuthContent isLogin navigation={navigation} onAuthenticate={onAuthenticate}/>;
}

export default LoginScreen;
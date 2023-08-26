import { Pressable, StyleSheet, Text, View } from 'react-native';
import FlatButton from '../components/ui/FlatButton';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
function WelcomeScreen() {
  const dispatch = useDispatch();
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Pressable onPress={() => dispatch(logout())}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
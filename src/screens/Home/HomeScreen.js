import { StyleSheet, View } from 'react-native';
import ContentHome from '../../components/Home/ContentHome';

function HomeScreen() {

  return (
    <View style={styles.rootContainer}>
        <ContentHome />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CardBookInHome from '../../components/Home/CardBookInHome';
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
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import CardBookInHome from '../../components/Home/CardBookInHome';
import CardQuickInformation from '../../components/Home/CardQuickInformation';
import HeaderHome from '../../components/Home/HeaderHome';
import { Colors } from '../../constants/styles';
import * as SecureStore from 'expo-secure-store';
import Scanner from '../../components/Home/Scaner';

function HomeScreen() {
    const [ orderedLockers , setOrderedLockers ] = useState([
      {
        code: 'A1',
        key: '123456',
        timeOut: '10h'
      },

      {
          code: 'A2',
          key: '123456',
          timeOut: '10h'
      },

      {
        code: 'A3',
        key: '123456',
        timeOut: '10h'
      },

      {
          code: 'A4',
          key: '123456',
          timeOut: '10h'
      },

      {
        code: 'A5',
        key: '123456',
        timeOut: '10h'
      },

      {
          code: 'A6',
          key: '123456',
          timeOut: '10h'
      },

      {
        code: 'A7',
        key: '123456',
        timeOut: '10h'
      },

      {
          code: 'A8',
          key: '123456',
          timeOut: '10h'
      },
    ]);

  return (
    <View style={styles.rootContainer}>
        <HeaderHome />
        <FlatList
            data={orderedLockers}
            renderItem={({ item }) => <CardBookInHome book={item} />}
            keyExtractor={(item) => item.code}
            showsVerticalScrollIndicator={false}
            style={{
                width: '100%',
                paddingHorizontal: 20,
                marginTop: 10,
                height: '100%',
            }}
        />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
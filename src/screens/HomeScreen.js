import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import CardBookInHome from '../components/Home/CardBookInHome';
import CardQuickInformation from '../components/Home/CardQuickInformation';
import HeaderHome from '../components/Home/HeaderHome';
import { Colors } from '../constants/styles';
import * as SecureStore from 'expo-secure-store';

function HomeScreen() {
    const [ orderedLockers , setOrderedLockers ] = useState([
      {
        code: 'A1',
        key: '2561245778',
        timeOut: '10h'
      },

      {
          code: 'A2',
          key: '2561245778',
          timeOut: '10h'
      },

      {
        code: 'A3',
        key: '2561245778',
        timeOut: '10h'
      },

      {
          code: 'A4',
          key: '2561245778',
          timeOut: '10h'
      },

      {
        code: 'A5',
        key: '2561245778',
        timeOut: '10h'
      },

      {
          code: 'A6',
          key: '2561245778',
          timeOut: '10h'
      },

      {
        code: 'A7',
        key: '2561245778',
        timeOut: '10h'
      },

      {
          code: 'A8',
          key: '2561245778',
          timeOut: '10h'
      },
    ]);
    const [ dashboardData, setDashboardData ] = useState([
        {
            id: 0,
            title: 'Total lockers',
            num: 10,
            max: 20,
            image: require('../../assets/images/icon_locker.png'),
            description: 'Total lockers',
            color: Colors.blue
        },
        {
            id : 1,
            title: 'Time out lockers',
            num: 5,
            max: 10,
            image: require('../../assets/images/icon_locker.png'),
            description: 'Total lockers',
            color: Colors.red
        },
        {
            id : 2,
            title: 'Time out 2',
            num: 5,
            image: require('../../assets/images/icon_locker.png'),
            description: 'Total 3',
            color: Colors.green
        },
        {
            id : 3,
            title: 'Time out 4',
            num: 5,
            image: require('../../assets/images/icon_locker.png'),
            description: 'Total lockers',
            color: Colors.green
        },
    ]);
    
    useEffect(() => {
      const setNames = async () => {
        await SecureStore.setItemAsync('nameSiteGroup', 'Site Group 1');
      }
      setNames();

      const getNames = async () => {
        const name =  await SecureStore.getItemAsync('nameSiteGroup');
        console.log(name);
      }
      getNames();
    }, []);

  return (
    <View style={styles.rootContainer}>
        <HeaderHome data={dashboardData}/>
        <FlatList
            data={orderedLockers}
            renderItem={({ item }) => <CardBookInHome book={item} />}
            keyExtractor={(item) => item.code}
            showsVerticalScrollIndicator={false}
            style={{
                width: '100%',
                paddingHorizontal: 20,
                marginTop: 10
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
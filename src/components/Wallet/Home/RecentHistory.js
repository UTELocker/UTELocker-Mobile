import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../../constants/styles';
import { METHOD_TRANSFER, STATUS_TRANSFER, TYPE_TRANSFER } from '../../../constants/walletConstant';
import CardHistory from '../History/CardHistory';
import { useNavigation } from '@react-navigation/native';
import { getTransaction } from '../../../api/hisgoryApi';
import { STATUS_CODE } from '../../../constants/systemConstant';

const RecentHistory = () => {
    const navigation = useNavigation();
    const [DATA, setDATA] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await getTransaction();
            if (res.status === STATUS_CODE.OK) {
                setDATA(res.data.data);
            }
        }
        fetchData();
    }, []);

    return (
        <View
            style={styles.container}
        >
            <Text
                style={{
                    marginBottom: 10,
                    fontSize: 18,
                    paddingHorizontal: 20,
                }}
            >
                Recent History
            </Text>
            <View 
                style={{
                    borderBottomColor: Colors.lightGray2,
                    borderBottomWidth: 5,
                }}
            />
            {
                DATA.length > 0
                    ? DATA.map((item) => {
                        return <CardHistory
                            key={item.id}
                            item={item}
                        />
                    })
                    : <Text>No history</Text>
            }
            {
                DATA.length > 0
                    ? <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 10,
                        }}
                        onPress={() => {
                            navigation.navigate('History');
                        }}
                    >
                        Show more
                    </Text>
                    : null
            }
        </View>
    )
}

export default RecentHistory;


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: Colors.white,
        paddingBottom: 20,
    },
})
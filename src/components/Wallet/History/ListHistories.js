import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Colors } from '../../../constants/styles';
import CardHistory from './CardHistory';
import { getTransaction } from '../../../api/hisgoryApi';
import { MONTH, STATUS_CODE } from '../../../constants/systemConstant';
import { TYPE_TRANSFER } from '../../../constants/walletConstant';

const ListHistories = ({
    filterMonth,
    filterTypePayment,
}) => {
    const [histories, setHistories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await getTransaction();
            if (res.status == STATUS_CODE.OK) {
                const data = separateByMonth(res.data.data);
                setHistories(data);
            }
        }
        fetchData();
    }, []);

    const separateByMonth = (data) => {
        const result = {};
        data.forEach((item) => {
            const month = item.time.split(' ')[0].split('-')[1];
            if (!result[month]) {
                result[month] = [];
            }
            result[month].push(item);
        });
        return Object.entries(result);
    }

    useEffect(() => {
        console.log('filterMonth', filterMonth);
        if (histories.length > 0 && filterMonth != MONTH.ALL_MONTH) {
            console.log('pass', filterMonth);
            const data = histories.filter((item) => {
                return item[0] == filterMonth;
            });
            setHistories(data);
        }
    }, [filterMonth, histories]);

    useEffect(() => {
        if (histories.length > 0 && filterTypePayment != TYPE_TRANSFER.ALL_TYPE) {
            const data = histories.filter((item) => {
                const result = item[1].filter((item) => {
                    return item.type == filterTypePayment;
                });
                return result;
            });
            setHistories(data);
        }
    }, [filterTypePayment, histories]);


    return (
        <View
            style={styles.container}
        >
            <FlatList
                data={histories}
                keyExtractor={
                    item => item[0].id
                }
                renderItem={({ item, index }) => {
                    return (
                        <View
                            key={index}
                            style={{
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: '500',
                                    marginBottom: 10,
                                    paddingLeft: 20,
                                    backgroundColor: Colors.lightGray2,
                                    paddingVertical: 20,
                                }}
                            >
                                Month {item[0]}
                            </Text>
                            <FlatList
                                data={item[1]}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <CardHistory
                                            item={item}
                                        />
                                    )
                                }}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default ListHistories;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingBottom: 20,
    },
})
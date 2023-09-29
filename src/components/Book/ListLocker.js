import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native"
import CardLocker from "./CardLocker";

const ListLocker = ({
    dateStart,
    dateEnd,
    isFind,
    refreshing,
    setRefreshing
}) => {
    
    const [isLoad, setIsLoad] = useState(false);

    const data = [
        {
            id: 1,
            availableNumber: 10,
            address: "123 Nguyen Luong Bang, Da Nang"
        },
        {
            id: 2,
            availableNumber: 10,
            address: "KTX My Dinh, Ha Noi"
        },
    ];

    useEffect(() => {
        if (isFind) {
            setTimeout(() => {
                setIsLoad(true);
            }, 500);
        }
    }, [isFind])

    useEffect(() => {
        if (refreshing) {
            setTimeout(() => {
                setRefreshing(false);
            }, 500);
        }
    }, [refreshing])

    if (!isLoad) 
        return <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text>
                Loading...
            </Text>
        </View>

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
            }}
        >
            {
                data.map((item, index) => {
                    return (
                        <CardLocker
                            key={index}
                            locker={item}
                            date={{
                                start: dateStart,
                                end: dateEnd,
                            }}
                        />
                    )
                })  
            }
        </View>
    )
}


export default ListLocker

const styles = StyleSheet.create({
})
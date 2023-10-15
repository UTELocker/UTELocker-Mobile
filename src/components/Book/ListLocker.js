import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native"
import CardLocker from "./CardLocker";
import { searchLockers } from "../../api/lockersApi";
import STATUS_CODE from "../../constants/statusCode";

const ListLocker = ({
    dateStart,
    dateEnd,
    isFind,
    refreshing,
    setRefreshing
}) => {
    
    const [isLoad, setIsLoad] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        if (isFind) {
            setTimeout(() => {
                setIsLoad(true);
            }, 500);
        }

        const searchListLockers = async () => {
            const res = await searchLockers({
                start_date: dateStart.date + " " + dateStart.time,
                end_date: dateEnd.date + " " + dateEnd.time,
            });
            switch(res.status) {
                case STATUS_CODE.OK:
                    setData(res.data.data);
                    setIsLoad(true);
                    break;
                default:
                    setIsLoad(false);
                    break;
            }
        }
        searchListLockers();

    }, [isFind, refreshing])

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
                            key={item.id}
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
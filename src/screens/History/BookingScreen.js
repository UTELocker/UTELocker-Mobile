import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import CardBooking from "../../components/History/CardBooking";
import { STATUS_LOCKER } from "../../constants/lockerConstant";
import CardTime from "../../components/History/CardTime";
import { useEffect, useState } from "react";
import { FILTER_LOCATION, FILTER_MOTH, FILTER_STATUS } from "../../constants/systemConstant";
import { getHistory } from "../../api/hisgoryApi";
import { STATUS_CODE } from "../../constants/systemConstant";

const BookingScreen = ({
    contentSearch,
    setListLocation,
    filters
}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getHistory();
            if (res.status === STATUS_CODE.OK) {
                const data = res.data.data.bookings;
                let listBookingsOfMoth = [];
                const listBookings = [];
                let monthTemp = '';
                const listLocations = [];
                data.forEach((item) => {
                    const monthYear = item.start_date.split('-').slice(0, 2);
                    if (monthTemp !== monthYear[1]) {
                        monthTemp = monthYear[1];
                        listBookings.push({
                            date: monthYear[1] + '-' + monthYear[0],
                            bookings: listBookingsOfMoth,
                        })
                        listBookingsOfMoth = [];
                    }
                    const totalTime = (new Date(item.end_date) - new Date(item.start_date)) / 1000 / 60;
                    const totalPrice = (item.config?.price_per_minute === undefined 
                        ? 10 
                        : item.config?.price_per_minute) 
                        * totalTime
                    const dateStart = item.start_date.split(' ');
                    const dateEnd = item.end_date.split(' ');
                    
                    listBookingsOfMoth.push({
                        id: item.id,
                        address: item.address,
                        locker: item.id,
                        date: item.created_at,
                        status: item.status,
                        price: totalPrice,
                        timesOpen: 2,
                        location: {
                            latitude: item.latitude,
                            longitude: item.longitude,
                        },
                        time: {
                            start: {
                                date: dateStart[0],
                                time: dateStart[1],
                            },
                            end: {
                                date: dateEnd[0],
                                time: dateEnd[1],
                            }
                        }
                    });

                    if (!listLocations.includes(item.address)) {
                        listLocations.push(item.address);
                    }
                });
                if (listBookingsOfMoth.length > 0) {
                    listBookings.push({
                        date: monthTemp,
                        bookings: listBookingsOfMoth,
                    })
                }
                setListLocation(listLocations);
                setData(listBookings);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log('data', FILTER_MOTH[0].value);
        const filterData = data.map((item) => {
            let isFilterMoth = true;
            if(filters.moth !== FILTER_MOTH[0].value) {
                const date = new Date(item.date);
                const moth = date.getMonth() + 1;
                if (filters.moth !== moth) {
                    isFilterMoth = false;
                }
            }
            
            if (isFilterMoth) {
                const bookings = item.bookings.filter((booking) => {
                    let isFilter = true;
                    if (filters.location !== FILTER_LOCATION[0].value) {
                        if (filters.location !== booking.address) {
                            isFilter = false;
                        }
                    }
                    if (filters.status !== FILTER_STATUS[0].value) {
                        if (filters.status !== booking.status) {
                            isFilter = false;
                        }
                    }
                    return isFilter;
                });
                return {
                    ...item,
                    bookings,
                }
            } else {
                return {
                    ...item,
                    bookings: [],
                }
            }
        });

        if (contentSearch) {
            const newData = filterData.map((item) => {
                const bookings = item.bookings.filter((booking) => {
                    return booking.address.toLowerCase().includes(contentSearch.toLowerCase()) || booking.locker.toLowerCase().includes(contentSearch.toLowerCase());
                });
                return {
                    ...item,
                    bookings,
                }
            });

            setData(newData);
        } else {
            setData(filterData);
        }
    }, [filters,contentSearch])

    const isEmptyAllBooking = () => {
        let isEmpty = false;
        data.forEach((item) => {
            if (item.bookings.length > 0) {
                isEmpty = true;
            }
        });
        return isEmpty;
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {
                    isEmptyAllBooking() ? data.map((item, index) => (
                        <View
                            key={index}
                            style={{
                                marginTop: index === 0 ? 20 : 0,
                            }}
                        >
                            {
                                item.bookings.length > 0 && (
                                    <CardTime time={item.date} />
                                )
                            }
                            {item.bookings.map((booking, index) => (
                                <CardBooking booking={booking} key={index} />
                            ))}
                        </View>
                    )) : (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 500,
                            }}
                        >
                            <Text>No data</Text>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
};

export default BookingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        paddingHorizontal: 15,
    }
});
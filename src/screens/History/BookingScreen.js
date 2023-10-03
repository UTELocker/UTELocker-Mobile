import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import CardBooking from "../../components/History/CardBooking";
import STATUS_LOCKER from "../../constants/statusBooking";
import CardTime from "../../components/History/CardTime";
import { useEffect, useState } from "react";
import { FILTER_LOCATION, FILTER_MOTH, FILTER_STATUS } from "../../constants/fieldFilter";

const BookingScreen = ({
    contentSearch,
    setListLocation,
    filters
}) => {
    const defaultData =[
        {
            date: '2021-09',
            bookings: [
                {
                    id: 1,
                    address: 'KTX Khu B',
                    locker: 'A2',
                    date: '2021-09-20',
                    status: STATUS_LOCKER.FINISHED,
                    price: 10000,
                    timesOpen: 2,
                    location: {
                        latitude: 10.762622,
                        longitude: 106.660172,
                    },
                    time: {
                        start: {
                            date: '2021-08-12',
                            time: '10:00',
                        },
                        end: {
                            date: '2021-08-12',
                            time: '11:00',
                        }
                    }
                }
            ]
        },
        {
            date: '2021-08',
            bookings: [
                {
                    id: 3,
                    address: 'KTYX Khu B',
                    locker: 'A1',
                    date: '2021-08-16',
                    status: STATUS_LOCKER.ERROR,
                    price: 10000,
                    timesOpen: 2,
                    location: {
                        latitude: 10.762622,
                        longitude: 106.660172,
                    },
                    time: {
                        start: {
                            date: '2021-08-12',
                            time: '10:00',
                        },
                        end: {
                            date: '',
                            time: '',
                        }
                    }
                },
                {
                    id: 1,
                    address: 'KTRX Khu C',
                    locker: 'A3',
                    date: '2021-08-12',
                    status: STATUS_LOCKER.FINISHED,
                    price: 10000,
                    timesOpen: 2,
                    location: {
                        latitude: 10.762622,
                        longitude: 106.660172,
                    },
                    time: {
                        start: {
                            date: '2021-08-12',
                            time: '10:00',
                        },
                        end: {
                            date: '2021-08-12',
                            time: '11:00',
                        }
                    }
                }
            ]           
        }
    ];
    const [data, setData] = useState(defaultData);

    useEffect(() => {
        const filterData = defaultData.map((item) => {
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
        console.log('data', data);
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
import React, { useEffect } from "react";
import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const handelMinute = (minute) => {
    if (minute === '0') {
        return '00';
    } else if (minute < 10) {
        return '0' + minute;
    } else {
        return minute;
    }
}

const DateTimePickerModal = ({ 
    date,
    setDate,
    showModal,
    setModal,
    title
}) => {
    const [ datePicker, setDatePicker ] = React.useState({
        date : date ?
            new Date(date.date + ' ' + date.time) :
            new Date(),
        mode : 'date',
        show : false
    });

    useEffect(() => {
        setDatePicker({
            date : date ?
                new Date(date.date + ' ' + date.time) :
                new Date(),
            mode : 'date',
            show : false
        });
    }, [date]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
                setModal({
                    ...showModal,
                    showModal: !showModal
                });
            }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text
                    style={styles.modalText}
                >
                    {title}
                </Text>
                {
                    datePicker.show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={datePicker.date}
                            mode={datePicker.mode}
                            is24Hour={true}
                            display="default"
                            onChange={(event, selectedDate) => {
                                const currentDate = selectedDate;
                                setDatePicker({
                                    ...datePicker,
                                    show: !datePicker.show,
                                    date: currentDate
                                });
                            }}
                            minimumDate={new Date()}
                            minuteInterval={30}
                        />
                    )
                }

                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => {
                        setDatePicker({
                            ...datePicker,
                            show: !datePicker.show,
                            mode: 'date'
                        });
                    }}
                >
                    <Text style={styles.textStyle}>Date</Text>
                </Pressable>

                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => {
                        setDatePicker({
                            ...datePicker,
                            show: !datePicker.show,
                            mode: 'time'
                        });
                    }}
                >
                    <Text style={styles.textStyle}>Time</Text>
                </Pressable>

                <Text
                    style={styles.modalText}
                >
                    {
                        datePicker.date.getFullYear() + '-' +
                        (datePicker.date.getMonth() + 1) + '-' +
                        datePicker.date.getDate() + ', ' +
                        datePicker.date.getHours() + ':' +
                        handelMinute(datePicker.date.getMinutes())
                    }
                </Text>

                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                        setModal({
                            ...showModal,
                            showModal: !showModal,
    
                        });
                        setDate({
                            date: datePicker.date.getFullYear() + '-' +
                            (datePicker.date.getMonth() + 1) + '-' +
                            datePicker.date.getDate(),
                            time: datePicker.date.getHours() + ':' +
                            handelMinute(datePicker.date.getMinutes())
                        });
                    }}
                >
                    <Text style={styles.textStyle}>
                        Done
                    </Text>
                </Pressable>
            </View>
            </View>
        </Modal>
    )
}

export default DateTimePickerModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 10,
        width: 200,
      },
      buttonOpen: {
        backgroundColor: '#C4C4C4',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
      },
      modalDate: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }

  });
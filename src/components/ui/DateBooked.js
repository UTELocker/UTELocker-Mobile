import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';

const DateBooked = ({date}) => {

    return (
        <View
            style={styles.containerText}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: Colors.lightGray2,
                    padding:10,
                    marginBottom: 10,
                }}
            >
                <View
                    style={{
                        flex:1,
                        alignItems: 'center',
                    }}
                >
                    <Text>
                        {date.start.date}
                    </Text>
                    <Text>
                        {date.start.time}
                    </Text>
                </View>
                <Text
                    style={{
                        flex:1,
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    -
                </Text>
                <View
                    style={{
                        flex:1,
                        alignItems: 'center',
                    }}
                >
                    {
                        date.end.date !== '' ? (
                            <>
                                <Text>
                                    {date.end.date}
                                </Text>
                                <Text>
                                    {date.end.time}
                                </Text>
                            </>
                        ) : (
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: Colors.gray,
                                }}
                            >
                                Not yet
                            </Text>
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default DateBooked;

const styles = StyleSheet.create({
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})
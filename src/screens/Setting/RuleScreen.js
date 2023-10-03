import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../../components/ui/Header';
import { Colors } from '../../constants/styles';

const RuleScreen = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData([
            {
                title: 'I. General Terms',
                content: 
                `
                1. The number of people in the room must not exceed the number of people allowed in the room. \n
                2. Do not make noise after 10pm. \n
                3. Do not smoke in the room. \n
                4. Do not bring pets into the room. \n
                5. Do not bring food into the room. \n
                6. Do not litter in the room. \n
                7. Do not use the room for illegal purposes. \n`    
            },
            {
                title: 'II. User account policies',
                content: 
                `
                1. The number of people in the room must not exceed the number of people allowed in the room. \n
                2. Do not make noise after 10pm. \n
                3. Do not smoke in the room. \n
                4. Do not bring pets into the room. \n
                5. Do not bring food into the room. \n
                6. Do not litter in the room. \n
                7. Do not use the room for illegal purposes. \n`    
            },
            {
                title: 'III. User account policies',
                content: 
                `
                1. The number of people in the room must not exceed the number of people allowed in the room. \n
                2. Do not make noise after 10pm. \n
                3. Do not smoke in the room. \n
                4. Do not bring pets into the room. \n
                5. Do not bring food into the room. \n
                6. Do not litter in the room. \n
                7. Do not use the room for illegal purposes. \n`    
            },
        ]);
    }, []);

    const renderRule = (title, content, index) => {
        return (
            <View
                key={index}
                style={{
                    padding: 20,
                    border: Colors.blue,
                    borderTopWidth: 1,
                    borderRightWidth: 1,
                    borderLeftWidth: 1,
                    borderBottomWidth: index === data.length - 1 ? 1 : 0,
                    marginHorizontal: 20,
                    marginBottom: index === data.length - 1 ? 50 : 0,
                }}
            >
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                    }}
                >
                    {content}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Header
                title="Rule"
                buttons={{
                    isBack: true,
                    isNotification: false,
                }}
            />
            <ScrollView
                style={{
                    paddingHorizontal: 20,
                    paddingTop: 20,
                }}
            >
                {
                    data && data.map((item, index) => {
                        return renderRule(item.title, item.content, index);
                    })
                }
            </ScrollView>
        </View>
    );
}

export default RuleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

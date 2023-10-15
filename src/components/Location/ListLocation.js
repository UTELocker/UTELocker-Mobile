import { ScrollView } from "react-native";
import CardLocation from "./CardLocation";
import {Text } from 'react-native';

const ListLocation = ({ 
    listLocker,
 }) => {
    return (
        <ScrollView
            style={{
                width: '100%',
                height: '93%',
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
            }}>Near By</Text>
            {
                listLocker.closest.length > 0 ? (
                    listLocker.closest.map((element, index) => (
                        <CardLocation key={element.id} location={element} />
                    ))
                ) : (
                    <Text
                        style={{
                            fontSize: 16,
                            marginTop: 10,
                        }}
                    >No data</Text>
                )
            }
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
            }}>Other</Text>
            {
                listLocker.other.length > 0 ? (
                    listLocker.other.map((element, index) => (
                        <CardLocation key={element.id} location={element} />
                    ))
                ) : (
                    <Text>No data</Text>
                )
            }
        </ScrollView>
    )
}

export default ListLocation;
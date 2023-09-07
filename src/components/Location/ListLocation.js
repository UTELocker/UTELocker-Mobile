import CardLocation from "./CardLocation";
import { FlatList, Text, View } from 'react-native';

const ListLocation = ({ 
    listLocker,
 }) => {
    return (
        <View
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
            }}>Closest</Text>
            {
                listLocker.closest.length > 0 ? (
                    <FlatList
                        data={listLocker.closest}
                        renderItem={({ item }) => <CardLocation location={item} />}
                        keyExtractor={item => item.id}
                    />
                ) : (
                    <Text
                        style={{
                            fontSize: 16,
                            marginBottom: 10,
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
                    <FlatList
                        data={listLocker.other}
                        renderItem={({ item }) => <CardLocation location={item} />}
                        keyExtractor={item => item.id}
                    />
                ) : (
                    <Text>No data</Text>
                )
            }
        </View>
    )
}

export default ListLocation;
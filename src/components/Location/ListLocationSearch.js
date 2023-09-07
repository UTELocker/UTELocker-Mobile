import { FlatList, Text, View } from 'react-native';
import CardLocation from './CardLocation';

const ListLocationSearch = ({
    listLocker,
}) => {
    const listLocation = listLocker.closest.concat(listLocker.other);
    return (
            <View
                style={{
                    width: '100%',
                    height: '93%',
                    paddingHorizontal: 15,
                    paddingTop: 10,
                }}
            >
                {
                    listLocation.length > 0 ? (
                        <FlatList
                            data={listLocation}
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
            </View>
    )
}

export default ListLocationSearch;
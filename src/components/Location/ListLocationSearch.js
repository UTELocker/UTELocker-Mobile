import { FlatList, Text, View } from 'react-native';
import CardLocation from './CardLocation';
import { useEffect } from 'react';
import { useState } from 'react';

const ListLocationSearch = ({
    listLocker,
    locationFilter,
}) => {
    const [ listLocation, setListLocation ] = useState(listLocker.closest.concat(listLocker.other));
    useEffect(() => {
        const listLocationFilter = listLocation.filter(element => {
            if (element.code.toLowerCase().includes(locationFilter.toLowerCase()) || element.description.toLowerCase().includes(locationFilter.toLowerCase())) {
                return true;
            }
        });
        setListLocation(listLocationFilter);
    }, [locationFilter]);
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
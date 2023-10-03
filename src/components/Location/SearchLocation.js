import { Entypo } from '@expo/vector-icons';
import { Colors } from "../../constants/styles";
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import SearchBar from '../ui/SearchBar';

const SearchLocation = ({
    setTypeLocationSearch,
    typeLocationSearch,
    setLocationFilter,
    locationFilter,
}) => {
    const ButtonEnd = () => {
        switch (typeLocationSearch) {
            case 'list':
                return (
                    <TouchableOpacity
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                width: '100%',
                            }}
                            onPress={() => setTypeLocationSearch('map')}
                        >
                            <Entypo
                                name="location-pin"
                                size={24}
                                color="black"
                            />
                            <Text>Map</Text>
                        </TouchableOpacity>
                )
            case 'map':
                return (
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            width: '100%',
                        }}
                        onPress={() => setTypeLocationSearch('list')}
                    >
                        <Entypo
                            name="list"
                            size={24}
                            color="black"
                        />
                        <Text>List</Text>
                    </TouchableOpacity>
                )
            default:
                return (
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            width: '100%',
                        }}
                        onPress={() => {
                            Keyboard.dismiss();
                            const type = typeLocationSearch.split('-')[0];
                            setTypeLocationSearch(type);
                        }}
                    >
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                )
        }
    }

    return (
        <View
            style={{
                width: '100%',
                height: '7%',
                backgroundColor: Colors.primary,
                flexDirection: 'row',
                paddingBottom: 10,
                paddingHorizontal: 10,
            }}
        >
            <SearchBar
                onChange={setLocationFilter}
                onFocus={() => {
                    if (typeLocationSearch.indexOf('-search') === -1) {
                        const type = typeLocationSearch + '-search';
                        setTypeLocationSearch(type);
                    }
                }}
                value={locationFilter}
            />
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30,
                    backgroundColor: Colors.white,
                    marginRight: 10,
                }}
            >
               <ButtonEnd />
            </View>
        </View>
    )
}

export default SearchLocation;


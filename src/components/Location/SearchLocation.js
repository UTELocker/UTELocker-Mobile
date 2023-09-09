import { Entypo } from '@expo/vector-icons';
import { Colors } from "../../constants/styles";
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";

const SearchLocation = ({
    setTypeLocationSearch,
    typeLocationSearch,
    setLocationFilter,
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
            }}
        >
            <View
                style={{
                    flex: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderRadius: 30,
                    backgroundColor: Colors.white,
                    marginHorizontal: 10,                            
                }}
            >
                <TextInput
                    style={{
                        flex: 6,
                        width: 300,
                        height: 50,
                        paddingLeft: 20,
                        fontSize: 18,
                    }}
                    placeholder="Search Location"
                    onFocus={() => {
                        if (typeLocationSearch.indexOf('-search') === -1) {
                            const type = typeLocationSearch + '-search';
                            setTypeLocationSearch(type);
                        }
                    }}
                    onChangeText={(text) => setLocationFilter(text)}
                />
                <Entypo 
                    style={{
                        flex: 1,
                        alignContent: 'flex-end',
                    }} 
                    name="magnifying-glass" 
                    size={24} 
                    color="black" 
                />
            </View>
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
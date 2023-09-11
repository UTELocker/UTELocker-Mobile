import { StyleSheet, View, TextInput } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Colors } from "../../constants/styles";

const SearchBar = ({ onChange, value = '', onFocus = () => {} }) => {
    return (
        <View
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                placeholder="Search Location"
                onFocus={() => onFocus()}
                onChangeText={(text) => onChange(text)}
                value={value}
            />
            <Entypo
                style={styles.icon} 
                name="magnifying-glass" 
                size={24} 
                color="black" 
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: Colors.white,
        marginHorizontal: 10,                            
    },
    input: {
        flex: 1,
        width: 300,
        height: 50,
        paddingLeft: 20,
        fontSize: 18,
    },
    icon: {
        paddingRight: 20,
    }
})
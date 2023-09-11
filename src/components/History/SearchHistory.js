import { Pressable, StyleSheet, TextInput, View } from "react-native"
import { Colors } from "../../constants/styles"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from "../ui/SearchBar";
import { useNavigation } from "@react-navigation/native";

const SearchHistory = ({
    balanceVisibility,
    setBalanceVisibility,
    rightIcon,
    setRightIcon,
    setContentSearch,
    contentSearch,
    setFilters,
    filters,
    listLocation,
}) => {
    const navigation = useNavigation();
  
    const handleBalanceVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setBalanceVisibility(!balanceVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setBalanceVisibility(!balanceVisibility);
      }
    };
    return (
        <View 
            style={styles.container}
        >
            <SearchBar
                onChange={setContentSearch}
                value={contentSearch}
            />
            <Pressable
                style={{
                    marginHorizontal: 10,
                    justifyContent: 'center',
                }}
                onPress={() => navigation.navigate('FilterHistory', { 
                    setFilters: setFilters, 
                    filters: filters,
                    listLocation: listLocation,
                })}
            >
                <Feather name="filter" size={28} color={Colors.white} />
            </Pressable>
            <Pressable
                onPress={handleBalanceVisibility}
                style={{
                    marginRight: 5,
                    justifyContent: 'center',
                }}
            >
                <MaterialCommunityIcons name={rightIcon} size={28} color={Colors.white} />
            </Pressable>
        </View>
    )
}

export default SearchHistory

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '7%',
        marginBottom: 20,
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        paddingBottom: 10,
    },
})

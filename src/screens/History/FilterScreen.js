import ContentFilter from "../../components/History/ContentFilter";
import Header from "../../components/ui/Header"

const { View, Text, StyleSheet } = require("react-native")

const FilterScreen = ({ route }) => {
    const { setFilters, filters, listLocation } = route.params;
    return (
        <View
            style={styles.container}
        >
            <Header
                title="Filter"
                buttons={{
                    isBack: true,
                    isNotification: false,
                }}
            />
            <ContentFilter
                setFilters={setFilters}
                filters={filters}
                listLocation={listLocation}
            />
        </View>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

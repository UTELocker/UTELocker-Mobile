import { Text, View } from "react-native"
import HeaderBook from "../components/Book/HeaderBook"
import SelectTypeBook from "../components/Book/SelectTypeBook"

const SelectTypeBookScreen = () => {
    return (
        <View
            style={{
                height: '100%',
                width: '100%',
            }}
        >
            <HeaderBook title="Select Type Book" isBack={false}/>
            <SelectTypeBook />
        </View>
    )
}

export default SelectTypeBookScreen
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    
    container: {
        marginTop: 14,
        marginBottom: 10,
        marginHorizontal: 12 
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    headerTitle: {
        fontFamily: "semibold",
        fontSize: SIZES.xLarge -2,
    }

})

export default styles;
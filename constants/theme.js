import { Dimensions } from "react-native";
import styles from "../screens/home.style";
const { height, width} = Dimensions;

const COLORS = {
    primary: "2A4050",
    secondary: "#DDf0ff",
    tertiary: "#FF7754",

    gray: "#83829A",
    gray2: "#C1C0C0",

    offwhite: "#F3F4F8",
    white: "#FFFFFF",
    black: "#000000",
    red: "#e81e4d",
    green: "#00C135",
    lightWhite: "#FAFAFC"
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25
    }
}

export default styles
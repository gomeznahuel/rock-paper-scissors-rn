import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const HeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.rust,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 22,
  },
});

export default HeaderStyles;
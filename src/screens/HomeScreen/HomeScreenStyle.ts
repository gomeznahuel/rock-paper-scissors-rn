import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: colors.sandyBrown,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.rust,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    backgroundColor: colors.red,
    color: colors.white,
    padding: 15,
    width: "100%",
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});

export default styles ;
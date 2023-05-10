import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 14,
  },
  description: {
    fontSize: 18,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
  },
  gameContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    width: "95%",
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  choicesContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    gap: 10,
  },
  gamePromptText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  resultContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    width: "95%",
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;

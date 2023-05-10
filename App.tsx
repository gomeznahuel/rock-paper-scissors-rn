import { StyleSheet, View } from "react-native";
import { Header } from "./src/components";
import HomeScreen from "./src/screens/HomeScreen/styles";
import { useCustomFonts } from "./src/hooks/useCustomFonts";

export default function App() {
  const { fontsLoaded } = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header newStyles={{ fontFamily: "Ubuntu-Bold", fontSize: 28, color: "#fff" }} title="Rock, Paper, Scissors" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

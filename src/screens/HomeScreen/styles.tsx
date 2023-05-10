import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import StartGame from "../StartGameScreen/StartGameScreen";
import validateUsername from "../../utils/validateUsername";
import styles from "./HomeScreenStyle";

const HomeScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [startGame, setStartGame] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleInput = (text: string) => {
    setUsername(text);
  };

  const handleSubmit = () => {
    const error = validateUsername(username);

    if (error.errorMessage) setError(error.errorMessage);
    else setStartGame(true);
  };

  if (startGame) {
    return <StartGame username={username} />;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.inner}>
          <StatusBar backgroundColor="#000000" barStyle="light-content" />
          <Text style={styles.title}>Welcome to the game!</Text>
          <Text style={styles.label}>Enter your name:</Text>
          <TextInput style={styles.input} placeholder="Name" value={username} onChangeText={handleInput} accessibilityLabel="Name input" accessibilityHint="Enter your name using letters, numbers and spaces" />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleSubmit} accessibilityLabel="Submit button" accessibilityHint="Press to start the game" >
            <Text style={styles.buttonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

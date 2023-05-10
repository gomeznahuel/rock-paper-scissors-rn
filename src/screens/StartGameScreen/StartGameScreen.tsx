import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

type GameState = {
  userChoice: string | null;
  computerChoice: string | null;
  winner: string | null;
  gamePrompt: string;
};

type Props = {
  username: string;
};

const INITIAL_GAME_STATE: GameState = {
  userChoice: null,
  computerChoice: null,
  winner: null,
  gamePrompt: "Choose your weapon!",
};

const StartGame: React.FC<Props> = ({ username }) => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);

  const getRandomChoice = (): string => {
    const choices: string[] = ["rock", "paper", "scissors"];
    const randomIndex: number = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const getWinner = (userChoice: string, computerChoice: string): string => {
    let winner: string;

    if (userChoice === computerChoice) winner = "Tie";
    else {
      switch (userChoice) {
        case "rock":
          winner = computerChoice === "scissors" ? "You Win!" : "You Lose!";
          break;
        case "paper":
          winner = computerChoice === "rock" ? "You Win!" : "You Lose!";
          break;
        case "scissors":
          winner = computerChoice === "paper" ? "You Win!" : "You Lose!";
          break;
        default:
          winner = "Invalid choice";
      }
    }
    return winner;
  };

  const onChoicePress = (choice: string): void => {
    const userChoice: string = choice;
    const computerChoice: string = getRandomChoice();
    const winner: string = getWinner(userChoice, computerChoice);
    setGameState({
      ...gameState,
      userChoice,
      computerChoice,
      winner,
      gamePrompt: winner,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {username}</Text>
      <Text style={styles.description}>
        Rock, Paper, Scissors is a hand game usually played between two people,
        in which each player simultaneously forms one of three shapes with an
        outstretched hand. These shapes are "rock", "paper", and "scissors".
      </Text>

      {gameState.gamePrompt === "Choose your weapon!" ? (
        <View style={styles.choicesContainer}>
          <Text style={styles.resultText}>{gameState.gamePrompt}</Text>
        </View>
      ) : (
        <View style={styles.gameContainer}>
          <View style={styles.choicesContainer}>
            <Text style={styles.gamePromptText}>Your weapon:</Text>
            <Text style={styles.gamePromptText}>{gameState.userChoice}</Text>
          </View>
          <View style={styles.choicesContainer}>
            <Text style={styles.gamePromptText}>Computer's weapon:</Text>
            <Text style={styles.gamePromptText}>
              {gameState.computerChoice}
            </Text>
          </View>
        </View>
      )}

      {gameState.gamePrompt === "Choose your weapon!" ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{gameState.gamePrompt}</Text>
        </View>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{gameState.winner}</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Rock" onPress={() => onChoicePress("rock")} />
        <Button title="Paper" onPress={() => onChoicePress("paper")} />
        <Button title="Scissors" onPress={() => onChoicePress("scissors")} />
      </View>
    </View>
  );
};

export default StartGame;
import React from 'react';
import {
  Text, View, Image, StyleSheet
} from 'react-native';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

import { Colors } from '../constants/colors';

const goalImage = require('../assets/images/goal.jpg');

interface GameOverScreenProps {
  enteredNumber: string;
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>;
  numberOfGuess: number;
  setNumberOfGuess: React.Dispatch<React.SetStateAction<number>>;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({
  enteredNumber,
  setEnteredNumber,
  numberOfGuess,
  setNumberOfGuess,
  setScreen
}) => {
  const restartGame = () => {
    setEnteredNumber('');
    setNumberOfGuess(1);
    setScreen('StartGameScreen');
  };

  return (
    <View style={styles.container}>
      <Title title="Game is over" />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={goalImage} />
      </View>
      <Text style={styles.summaryText}>
        Your component had to guess{' '}
        <Text style={styles.highlightText}>{numberOfGuess}</Text> time for number{' '}
        <Text style={styles.highlightText}>{enteredNumber}</Text>
      </Text>
      <PrimaryButton onPress={restartGame}>Start new game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.accent500,
    overflow: 'hidden',
    margin: 30
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    color: Colors.primary500,
  },
  highlightText: {
    color: '#eb0d7c'
  }
});

import { useState, useEffect } from 'react';
import {
  View, StyleSheet, Alert, Text, FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Title from '../components/ui/Title';
import NumberGuess from '../components/game/NumberGuess';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

import getRandomNumber from '../helpers/getRandomNumber';

let minBoundary = 1;
let maxBoundary = 99;

const InGameScreen = ({ enteredNumber, setScreen, setNumberOfGuess }) => {
  const initialGuess = getRandomNumber(1, 99, enteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [gameRounds, setGameRounds] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === +(enteredNumber)) {
      setScreen('GameOverScreen');
    }
  }, [currentGuess, enteredNumber, setScreen]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 99;
  }, []);

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < enteredNumber)
      || (direction === 'greater' && currentGuess > enteredNumber)) {
      Alert.alert(
        'Dont lie',
        'Please give opponent right direction',
        [{ text: 'Sorry', style: 'cancel' }]
      );
      return null;
    }
    setNumberOfGuess((prevNumber) => prevNumber + 1);
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else { minBoundary = currentGuess + 1; }
    const newGuess = getRandomNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess);
    return setGameRounds((prevGameRounds) => [...prevGameRounds, newGuess]);

  };

  return (
    <View style={styles.container}>
      <Title title="Opponent's guess" />
      <NumberGuess textNumber={currentGuess} />
      <Card>
        <InstructionText> Higher or lower ?</InstructionText>
        <View style={styles.buttonsGroup}>
          <View style={styles.buttonItem}>
            <PrimaryButton onPress={() => { nextGuessHandler('greater'); }}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonItem}>
            <PrimaryButton onPress={() => { nextGuessHandler('lower'); }}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* {gameRounds.map((gameRound) => <Text>{gameRound}</Text>)} */}
      <FlatList
        data={gameRounds}
        renderItem={(itemData) => {
          return (
            <Text>{itemData.item}</Text>
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default InGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsGroup: {
    flexDirection: 'row',
  },
  buttonItem: {
    flex: 1,
  },
  flatListContainer: {
    width: 200,
    height: 200
  }
});

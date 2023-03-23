import { useState, useEffect } from 'react';
import {
  View, StyleSheet, Text, Alert
} from 'react-native';

import Title from '../components/ui/Title';
import NumberGuess from '../components/game/NumberGuess';
import PrimaryButton from '../components/ui/PrimaryButton';

import { Colors } from '../constants/colors';
import getRandomNumber from '../helpers/getRandomNumber';

let minBoundary = 1;
let maxBoundary = 99;

const InGameScreen = ({ enteredNumber, setScreen }) => {
  const initialGuess = getRandomNumber(1, 99, enteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === +(enteredNumber)) {
      setScreen('GameOverScreen');
    }
  }, [currentGuess, enteredNumber, setScreen]);

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
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else { minBoundary = currentGuess + 1; }
    // console.log(`min=${minBoundary} max=${maxBoundary}`);
    return setCurrentGuess(getRandomNumber(minBoundary, maxBoundary, currentGuess));

  };

  return (
    <View style={styles.container}>
      <Title title="Opponent's guess" />
      <NumberGuess textNumber={currentGuess} />
      <Text style={styles.text}> Higher or lower ?</Text>
      <View style={styles.buttonsGroup}>
        <PrimaryButton
          onPress={() => { nextGuessHandler('greater'); }}
        >
          {' '}
          +
          {' '}

        </PrimaryButton>
        <PrimaryButton
          onPress={() => { nextGuessHandler('lower'); }}
        >
          {' '}
          -
          {' '}

        </PrimaryButton>
      </View>
    </View>
  );
};

export default InGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary800,
  },
  buttonsGroup: {
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
});

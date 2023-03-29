import {
  Text, View, Image, StyleSheet
} from 'react-native';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

import { Colors } from '../constants/colors';

const goalImage = require('../assets/images/goal.jpg');

const GameOverScreen = ({
  enteredNumber,
  setEnteredNumber,
  numberOfGuess,
  setNumberOfGuess,
  setScreen
}: any) => {
  const restartGame = () => {
    setEnteredNumber('');
    setNumberOfGuess(1);
    setScreen('StartGameScreen');
  };
  // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'View'.
  return (
    // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
    <View style={styles.container}>
      // @ts-expect-error TS(7027): Unreachable code detected.
      <Title title="Game is  over" />
      // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
      <View style={styles.imageContainer}>
        // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
        <Image style={styles.image} source={goalImage} />
      </View>
      // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
      <Text style={styles.summaryText}>
        // @ts-expect-error TS(2304): Cannot find name 'Your'.
        Your component had to guess
        {' '}
        // @ts-expect-error TS(2304): Cannot find name 'style'.
        <Text style={styles.highlightText}>{numberOfGuess}</Text>
        {' '}
        // @ts-expect-error TS(2304): Cannot find name 'time'.
        time for number
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types '{ ' ': an... Remove this comment to see the full error message
        {' '}
        // @ts-expect-error TS(2304): Cannot find name 'style'.
        <Text style={styles.highlightText}>{enteredNumber}</Text>
        {' '}
      </Text>
      // @ts-expect-error TS(2304): Cannot find name 'onPress'.
      <PrimaryButton onPress={restartGame}> Start new game</PrimaryButton>
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

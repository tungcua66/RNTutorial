import {
  Text, View, Image, StyleSheet
} from 'react-native';

import Title from '../components/ui/Title';

import { Colors } from '../constants/colors';

const goalImage = require('../assets/images/goal.jpg');

const GameOverScreen = ({ enteredNumber, numberOfGuess }) => {
  return (
    <View style={styles.container}>
      <Title title="Game is  over" />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={goalImage} />
      </View>
      <Text style={styles.summaryText}>
        Your component had to guess
        {' '}
        <Text style={styles.highlightText}>{numberOfGuess}</Text>
        {' '}
        times for number
        {' '}
        <Text style={styles.highlightText}>{enteredNumber}</Text>
        {' '}
      </Text>
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
    margin: 20
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

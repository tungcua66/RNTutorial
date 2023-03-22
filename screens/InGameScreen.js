import { View, StyleSheet, Text } from 'react-native';

import Title from '../components/ui/Title';
import NumberGuess from '../components/game/NumberGuess';

import { Colors } from '../constants/colors';

const InGameScreen = () => {
  return (
    <View style={styles.container}>
      <Title title="Opponent's guess" />
      <NumberGuess textNumber={22} />
      <Text style={styles.text}> Higher or lower ?</Text>
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
  }
});

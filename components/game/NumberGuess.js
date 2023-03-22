import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';

const NumberGuess = ({ textNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {textNumber}
      </Text>
    </View>
  );
};

export default NumberGuess;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: Colors.accent800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: Colors.accent500,
    textAlign: 'center',
    padding: 10
  }
});

import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

interface Props {
  textNumber: number;
}

const NumberGuess = ({ textNumber }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textNumber}</Text>
    </View>
  );
};

export default NumberGuess;

const styles = StyleSheet.create({
  container: {
    margin: 20,
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
    padding: 10,
    fontFamily: 'OpenSans-Regular'
  }
});

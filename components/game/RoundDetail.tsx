import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

interface Props {
  roundNumber: number;
  guessNumber: number;
}

const RoundDetail = ({ roundNumber, guessNumber }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {' '}
        #
        {roundNumber}
        {' '}
      </Text>
      <Text style={styles.text}>
        {' '}
        Opponent&apos;s guess:
        {' '}
        {guessNumber}
      </Text>
    </View>
  );
};

export default RoundDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 10,
    margin: 5,
  },
  text: {
    color: Colors.primary800,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  }
});

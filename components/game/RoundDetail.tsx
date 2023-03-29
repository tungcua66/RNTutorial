import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const RoundDetail = ({
  roundNumber,
  guessNumber
}: any) => {
  // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'View'.
  return (
    // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
    <View style={styles.container}>
      // @ts-expect-error TS(7027): Unreachable code detected.
      <Text style={styles.text}>
        {' '}
        #
        {roundNumber}
        {' '}
      </Text>
      // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
      <Text style={styles.text}>
        {' '}
        // @ts-expect-error TS(2304): Cannot find name 'Opponent'.
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

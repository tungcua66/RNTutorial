import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';

const NumberGuess = ({
  textNumber
}: any) => {
  // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'View'.
  return (
    // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
    <View style={styles.container}>
      // @ts-expect-error TS(7027): Unreachable code detected.
      <Text style={styles.text}>
        {textNumber}
      </Text>
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

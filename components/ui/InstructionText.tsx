import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const InstructionText = ({
  children
}: any) => {
  // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'Text'.
  return (
    // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
    <Text style={styles.text}>{children}</Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    padding: 5,
    color: Colors.accent800,
    fontFamily: 'OpenSans-Bold'
  }
});

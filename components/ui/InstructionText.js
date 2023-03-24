import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const InstructionText = ({ children }) => {
  return (
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

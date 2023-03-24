import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const Title = ({ title }) => {
  return (
    <Text style={styles.container}>{title}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 10,
  }
});

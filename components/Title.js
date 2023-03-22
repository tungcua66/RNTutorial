import { Text, StyleSheet } from 'react-native';

const Title = ({ title }) => {
  return (
    <Text style={styles.container}>{title}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    color: '#81e5d8',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#81e5d8',
    padding: 10
  }
});

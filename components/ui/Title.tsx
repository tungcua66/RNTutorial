import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <Text style={styles.container}>{title}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    color: Colors.accent500,
    fontSize: 24,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 10,
    fontFamily: 'OpenSans-Regular'
  }
});

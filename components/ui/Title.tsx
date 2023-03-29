import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const Title = ({
  title
}: any) => {
  // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'Text'.
  return (
    // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
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

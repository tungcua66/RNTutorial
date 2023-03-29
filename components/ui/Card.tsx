import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const Card = ({
  children
}: any) => {
  // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'View'.
  return (
    // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: Colors.primary800,
    borderRadius: 10,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

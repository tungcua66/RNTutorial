import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
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

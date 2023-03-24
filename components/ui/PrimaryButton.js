import {
  View, Text, StyleSheet, Pressable
} from 'react-native';
import { Colors } from '../../constants/colors';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => (pressed
          ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer)}
        android_ripple={{ color: Colors.android_ripple_color, borderless: true }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: Colors.primary500,
    margin: 10,
    borderRadius: 10,
  },
  buttonInnerContainer: {
    padding: 10,
  },
  buttonText: {
    color: Colors.primaryButtonTextColor,
    fontSize: 18,
    textAlign: 'center',
    padding: 2,
  },
  pressed: {
    opacity: 0.70,
  }
});

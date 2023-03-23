import {
  View, Text, StyleSheet, Pressable
} from 'react-native';
import { Colors } from '../../constants/colors';

const PrimaryButton = ({ text, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => (pressed
          ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer)}
        android_ripple={{ color: Colors.android_ripple_color, borderless: true }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: Colors.primary500,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInnerContainer: {
    padding: 10,
    width: '100%',
  },
  buttonText: {
    color: Colors.primaryButtonTextColor,
    fontSize: 18,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.70,
  }
});
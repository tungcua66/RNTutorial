import {
  View, Text, StyleSheet, Pressable
} from 'react-native';

const PrimaryButton = ({ text }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => (pressed
          ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer)}
        android_ripple={{ color: '#5293ea', borderless: true }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: '#172b94',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonInnerContainer: {
    padding: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  pressed: {
    opacity: 0.70,
  }
});

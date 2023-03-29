import {
  View, Text, StyleSheet, Pressable
} from 'react-native';
import { Colors } from '../../constants/colors';

const PrimaryButton = ({
  children,
  onPress
}: any) => {
  // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'View'.
  return (
    // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
    <View style={styles.buttonOuterContainer}>
      // @ts-expect-error TS(2749): 'Pressable' refers to a value, but is being used a... Remove this comment to see the full error message
      <Pressable
        // @ts-expect-error TS(7027): Unreachable code detected.
        style={({
          pressed
        }: any) => (pressed
          ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer)}
        // @ts-expect-error TS(2304): Cannot find name 'android_ripple'.
        android_ripple={{ color: Colors.android_ripple_color, borderless: true }}
        // @ts-expect-error TS(2304): Cannot find name 'onPress'.
        onPress={onPress}
      >
        // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
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

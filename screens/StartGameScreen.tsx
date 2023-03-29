import {
  View, TextInput, StyleSheet, Alert
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Card';
import { Colors } from '../constants/colors';

const StartGameScreen = ({
  setScreen,
  enteredNumber,
  setEnteredNumber
}: any) => {

  const resetNumberHandler = () => {
    setEnteredNumber('');
  };

  const confirmNumberHandler = (number: any) => {
    if (Number.isNaN(number) || number < 0 || number > 99) {
      Alert.alert(
        'Invalid number',
        'Please enter a number between 0 and 99',
        [{ text: 'OK', style: 'cancel' }]
      );
      setEnteredNumber('');
      return null;
    }
    return setScreen('InGameScreen');
  };

  // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type 'View'.
  return (
    // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
    <View style={styles.container}>
      // @ts-expect-error TS(2749): 'Card' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Card>
        // @ts-expect-error TS(7027): Unreachable code detected.
        <InstructionText> Enter your number!</InstructionText>
        <TextInput
          // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
          style={styles.textInput}
          // @ts-expect-error TS(2304): Cannot find name 'autoCompleteType'.
          autoCompleteType="off"
          // @ts-expect-error TS(2304): Cannot find name 'autoCorrect'.
          autoCorrect={false}
          // @ts-expect-error TS(2304): Cannot find name 'maxLength'.
          maxLength={2}
          // @ts-expect-error TS(2304): Cannot find name 'keyboardType'.
          keyboardType="number-pad"
          // @ts-expect-error TS(2304): Cannot find name 'value'.
          value={enteredNumber}
          // @ts-expect-error TS(2304): Cannot find name 'onChangeText'.
          onChangeText={setEnteredNumber}
        />
        // @ts-expect-error TS(2304): Cannot find name 'style'.
        <View style={styles.buttonsContainer}>
          // @ts-expect-error TS(2304): Cannot find name 'style'.
          <View style={styles.buttonContainer}>
            // @ts-expect-error TS(2749): 'PrimaryButton' refers to a value, but is being us... Remove this comment to see the full error message
            <PrimaryButton
              // @ts-expect-error TS(2304): Cannot find name 'onPress'.
              onPress={resetNumberHandler}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            >
              // @ts-expect-error TS(2304): Cannot find name 'Reset'.
              Reset
            </PrimaryButton>
          </View>
          // @ts-expect-error TS(2304): Cannot find name 'style'.
          <View style={styles.buttonContainer}>
            // @ts-expect-error TS(2749): 'PrimaryButton' refers to a value, but is being us... Remove this comment to see the full error message
            <PrimaryButton
              // @ts-expect-error TS(2304): Cannot find name 'onPress'.
              onPress={() => confirmNumberHandler(parseInt(enteredNumber, 10))}
            // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
            >
              // @ts-expect-error TS(2304): Cannot find name 'Confirm'.
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>

  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.accent800,
    margin: 10,
    width: 50,
    fontSize: 32,
    color: Colors.accent800,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1
  }
});

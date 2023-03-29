import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  GestureResponderEvent,
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Card';
import { Colors } from '../constants/colors';

type StartGameScreenProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  enteredNumber: string;
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>;
};

const StartGameScreen: React.FC<StartGameScreenProps> = ({
  setScreen,
  enteredNumber,
  setEnteredNumber,
}) => {
  const resetNumberHandler = (): void => {
    setEnteredNumber('');
  };

  const confirmNumberHandler = (number: number): void => {
    if (Number.isNaN(number) || number < 0 || number > 99) {
      Alert.alert('Invalid number', 'Please enter a number between 0 and 99', [
        { text: 'OK', style: 'cancel' },
      ]);
      setEnteredNumber('');
      return null;
    }
    setScreen('InGameScreen');
  };

  return (
    <View style={styles.container}>
      <Card>
        <InstructionText> Enter your number!</InstructionText>
        <TextInput
          style={styles.textInput}
          autoCompleteType="off"
          autoCorrect={false}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={setEnteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={(event: GestureResponderEvent) =>
                confirmNumberHandler(parseInt(enteredNumber, 10))
              }
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

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
    flex: 1,
  },
});

export default StartGameScreen;

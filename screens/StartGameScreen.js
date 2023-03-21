import { useState } from 'react';
import {
  View, TextInput, StyleSheet, Alert
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = ({ navigation }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const resetNumberHandler = () => {
    setEnteredNumber('');
  };

  const confirmNumberHandler = () => {
    if (!Number.isNaN(enteredNumber) || enteredNumber < 0 || enteredNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Please enter a number between 0 and 99',
        [{ text: 'OK', style: 'cancel' }]
      );
      setEnteredNumber('');
      return null;
    }
    return navigation.navigate('InGame');
  };

  return (
    <View style={styles.container}>
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
          <PrimaryButton text="Reset" onPress={resetNumberHandler} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton text="Confirm" onPress={confirmNumberHandler} />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    margin: 100,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#2f0090',
    borderRadius: 10,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#62c2dd',
    margin: 10,
    width: 50,
    fontSize: 32,
    color: '#62c2dd',
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

import {
  View, Button, TextInput, StyleSheet, Modal, Image
} from 'react-native';
import { useState } from 'react';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

const goalImagePath = require('../assets/goal.png');

function GoalInput({ setGoalList, modalIsVisible, setModalIsVisible }) {
  const [inputGoalText, setInputGoalText] = useState('');

  const onChangeGoalTextHandler = (enteredGoalText) => {
    setInputGoalText(enteredGoalText);
  };

  const addGoalHandler = () => {
    setGoalList((currentList) => [...currentList, { text: inputGoalText, id: nanoid() }]);
    setInputGoalText('');
    setModalIsVisible(false);
  };

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={goalImagePath}
          style={styles.image}
          resizeMode="contain"
        />
        <TextInput
          placeholder="Enter your goal"
          placeholderTextColor="#ffffff"
          style={styles.input}
          onChangeText={onChangeGoalTextHandler}
          value={inputGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color="#1d7874"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => { setModalIsVisible(false); }}
              color="#ee2e31"
            />
          </View>
        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#071e22',
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 2,
    marginBottom: 16,
    padding: 8,
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    marginHorizontal: 4
  },
  image: {
    height: 100,
    width: 200,
    margin: 20
  }
});

export default GoalInput;

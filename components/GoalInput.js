import {View, Button, TextInput, StyleSheet} from 'react-native';
import {useState} from 'react';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';


const GoalInput = ({setGoalList}) => {
  const [inputGoalText, setInputGoalText] = useState('');

  const onChangeGoalTextHandler = (enteredGoalText) => {
    setInputGoalText(enteredGoalText);
  }

  const addGoalHandler = () => {
    setGoalList(currentList => [...currentList, {text: inputGoalText, id: nanoid()} ]);
    setInputGoalText('');
  }

  
  return (
    <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your goal" 
          style={styles.input}
          onChangeText={onChangeGoalTextHandler}
          value={inputGoalText}
        />
        <Button 
          title="Add goal"
          onPress={addGoalHandler}
        />
     </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 2,
    padding: 8
  },
})

export default GoalInput
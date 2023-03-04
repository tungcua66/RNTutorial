import {View, Button, TextInput, StyleSheet} from 'react-native';
import {useState} from 'react';


const GoalInput = ({setGoalList}) => {
  const [inputGoalText, setInputGoalText] = useState('');
  const onChangeGoalTextHandler = (enteredGoalText) => {
    setInputGoalText(enteredGoalText);
  }

  const addGoalHandler = () => {
    console.log(goalList)
    setGoalList(currentList => [...currentList, {text: inputGoalText, id: nanoid()} ]);
  }

  
  return (
    <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your goal" 
          style={styles.input}
          onChangeText={onChangeGoalTextHandler}
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
    borderBottomColor: '#cccccc'
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
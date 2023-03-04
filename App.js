import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, 
  TextInput, Button, FlatList } from 'react-native';
import {useState} from 'react';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'

export default function App() {
  const [inputGoalText, setInputGoalText] = useState('');
  const [goalList, setGoalList] = useState([]);

  const onChangeGoalTextHandler = (enteredGoalText) => {
    setInputGoalText(enteredGoalText);
  }

  const addGoalHandler = () => {
    console.log(goalList)
    setGoalList(currentList => [...currentList, {text: inputGoalText, id: nanoid()} ]);
  }


  return (
    <View style={styles.mainContainer}>
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
     <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}  
        data={goalList} 
        renderItem={(itemData) => {
          return(
            <View style={styles.goalListItem}>
              <Text 
                style={styles.goalListItemText}
              > 
              {itemData.item.text}
              </Text>
            </View>
          )}}
        keyExtractor={(item, index) => {return item.id}}
      />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      margin: 50,
      marginHorizontal: 16
    },
    goalsContainer: {
      flex: 5,
    },
    goalListItem: {
      backgroundColor: '#012A36',
      margin: 8,
      padding: 8,
      borderRadius: 8
    },
    goalListItemText: {
      color: 'white'
    },
});

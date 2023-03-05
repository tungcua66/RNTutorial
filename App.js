import { StyleSheet, View, FlatList } from 'react-native';
import {useState} from 'react';

import GoalInput from './components/GoalInput';
import GoalListItem from './components/GoalListItem';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  return (
    <View style={styles.mainContainer}>
     <GoalInput setGoalList={setGoalList}/>
     <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}  
        data={goalList} 
        renderItem={(itemData) => {
          return(
            <GoalListItem text={itemData.item.text}
              id={itemData.item.id}
              setGoalList={setGoalList}
            />
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
    
});

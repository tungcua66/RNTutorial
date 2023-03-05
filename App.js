import { StyleSheet, View, FlatList, Button } from 'react-native';
import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalListItem from './components/GoalListItem';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <StatusBar style='inverted'/>
      <View style={styles.mainContainer}>
        <Button  title="Add new goal" onPress={() => {setModalIsVisible(true)}}
          color='#1d7874'
        />
        <GoalInput setGoalList={setGoalList} 
          modalIsVisible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
          />
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
    </>
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

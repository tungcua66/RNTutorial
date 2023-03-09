import {View, Button, Text, StyleSheet, Pressable} from 'react-native';
import {useState} from 'react';

const GoalListItem = ({text, id, setGoalList}) => {
  var i =1;
  const onDeleteItemHandler = (id) => {
    setGoalList(currentGoalList => currentGoalList.filter((goalItem) => goalItem.id !== id));
  }

  return (
    <View style={styles.goalListItem}>
        <Pressable onPress={() => {onDeleteItemHandler(id)}}
            android_ripple={{color: '#c2b8b8'}}
        >
                <Text 
                    style={styles.goalListItemText}
                > 
                {text}
                </Text>
        </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
    goalListItem: {
        backgroundColor: '#679289',
        margin: 8,
        borderRadius: 8
      },
      goalListItemText: {
        color: 'white',
        padding: 8,
      },
})

export default GoalListItem
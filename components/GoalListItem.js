import {View, Button, Text, StyleSheet, Pressable} from 'react-native';
import {useState} from 'react';

const GoalListItem = ({text, id, setGoalList}) => {
  const onDeleteItemHandler = (id) => {
    setGoalList(currentGoalList => currentGoalList.filter((goalItem) => goalItem.id !== id));
  }

  return (
    <Pressable onPress={() => {onDeleteItemHandler(id)}}>
        <View style={styles.goalListItem}>
                <Text 
                    style={styles.goalListItemText}
                > 
                {text}
                </Text>
        </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
    goalListItem: {
        backgroundColor: '#012A36',
        margin: 8,
        padding: 8,
        borderRadius: 8
      },
      goalListItemText: {
        color: 'white'
      },
})

export default GoalListItem
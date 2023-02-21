import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
     <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your goal" style={styles.input}/>
        <Button 
          title="Add goal"
        />
     </View>
     <View style={styles.goalsContainer}>
      <Text> List of goals...</Text>
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
    inputContainer: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
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
    goalsContainer: {
      flex: 3,
    }
});

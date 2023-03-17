import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello World!</Text>

    </View>
  );
}

const styles = StyleSheet.create({

});

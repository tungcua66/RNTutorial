import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({

});

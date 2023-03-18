import { StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

const backgroundImage = require('./assets/images/background.jpg');

export default function App() {

  return (
    <LinearGradient
      colors={['#172b94', '#62c2dd']}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});

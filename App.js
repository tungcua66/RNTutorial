import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import InGameScreen from './screens/InGameScreen';
import GameOverScreen from './screens/GameOverScreen';

const backgroundImage = require('./assets/images/background.jpg');

export default function App() {
  const [screen, setScreen] = useState('StartGameScreen');

  return (
    <LinearGradient
      colors={['#172b94', '#62c2dd']}
      style={styles.container}
    >
      <StatusBar style="auto" />
      {/* { screen === 'StartGameScreen' ?? <StartGameScreen setScreen={setScreen} />} */}
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          {screen === 'StartGameScreen' ? (
            <StartGameScreen setScreen={setScreen} />
          ) : screen === 'InGameScreen' ? (
            <InGameScreen setScreen={setScreen} />
          ) : screen === 'GameOverScreen' ? (
            <GameOverScreen setScreen={setScreen} />
          ) : null}
        </SafeAreaView>
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

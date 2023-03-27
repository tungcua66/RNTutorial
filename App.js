import { useState, useEffect } from 'react';
import {
  StyleSheet, ImageBackground, SafeAreaView, Text
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import InGameScreen from './screens/InGameScreen';
import GameOverScreen from './screens/GameOverScreen';

import { Colors } from './constants/colors';

const backgroundImage = require('./assets/images/background.jpg');
const openSansRegular = require('./assets/fonts/OpenSans-Regular.ttf');
const openSansBold = require('./assets/fonts/OpenSans-Bold.ttf');

export default function App() {

  const [enteredNumber, setEnteredNumber] = useState('');
  const [screen, setScreen] = useState('StartGameScreen');
  const [numberOfGuess, setNumberOfGuess] = useState(1);

  const [fontsLoaded] = useFonts({
    'OpenSans-Regular': openSansRegular,
    'OpenSans-Bold': openSansBold,
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  SplashScreen.hideAsync();
  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.accent800]}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <ImageBackground
        source={backgroundImage}
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          {screen === 'StartGameScreen' ? (
            <StartGameScreen
              setScreen={setScreen}
              enteredNumber={enteredNumber}
              setEnteredNumber={setEnteredNumber}
            />
          ) : screen === 'InGameScreen' ? (
            <InGameScreen
              setScreen={setScreen}
              enteredNumber={enteredNumber}
              setNumberOfGuess={setNumberOfGuess}
            />
          ) : screen === 'GameOverScreen' ? (
            <GameOverScreen
              setScreen={setScreen}
              enteredNumber={enteredNumber}
              setEnteredNumber={setEnteredNumber}
              numberOfGuess={numberOfGuess}
              setNumberOfGuess={setNumberOfGuess}
            />
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

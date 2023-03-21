import { StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import InGameScreen from './screens/InGameScreen';

const backgroundImage = require('./assets/images/background.jpg');

const Stack = createNativeStackNavigator();

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
        <NavigationContainer>
          <Stack.Navigator initialRouteName="StartGame">
            <Stack.Screen name="StartGame" component={StartGameScreen} />
            <Stack.Screen name="InGame" component={InGameScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <StartGameScreen /> */}
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

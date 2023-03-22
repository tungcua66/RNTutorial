import { View, StyleSheet } from 'react-native';

import Title from '../components/Title';

const InGameScreen = () => {
  return (
    <View style={styles.container}>
      <Title title="Opponent's guess" />
    </View>
  );
};

export default InGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 20,
  }
});

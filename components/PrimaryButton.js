import { View, Text, StyleSheet } from 'react-native';

const PrimaryButton = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  text: {
    color: '#81e5d8'
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloCard from './components/HelloCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Staff Check-in </Text>
      <Text style={styles.h2}> by Ada Anya </Text>

      <HelloCard name="Ada"></HelloCard>
    </View>
  );
}

// TO DO: make a css file that exports a style constant for each .tsx file to use
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    backgroundColor: '#f9f7f2ff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  h1: {
    fontSize: 18,
    color: '#dc912eff',
  },
  h2: {
    fontSize: 14,
    color: '#d3af63ff'
  }
});

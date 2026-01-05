import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloCard from './components/HelloCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Staff Check-in </Text>
      <Text style={styles.h2}> by Ada Anya </Text>

      <HelloCard name="[name]">
        </HelloCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

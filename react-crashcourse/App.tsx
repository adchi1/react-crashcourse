import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HelloCard } from 'components/HelloCard';

export default function App() {
  return (
    // make these title and subtitle
    <View style={styles.container}>
      <Text> Staff Check-in </Text>
      <Text> by Ada Anya </Text>

      <HelloCard name="your name" />
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
});

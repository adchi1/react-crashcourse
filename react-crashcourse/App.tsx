import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloCard from './components/HelloCard';
import styles from './src/css/StyleSheet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Staff Check-in </Text>
      <Text style={styles.h2}> by Ada Anya </Text>

      <HelloCard name="Ada"></HelloCard>
    </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

interface TitleProps {
  title: string;
  subtitle: string;
}

// Use the interface for type-checking the props
const TitleComponent: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
        <TitleComponent
        title="Staff Check-in"
        subtitle="Ada Anya"
      />
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

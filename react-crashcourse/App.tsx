import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import HelloCard from './components/HelloCard';
import EventList from './src/pages/EventList'
import styles from './src/css/StyleSheet';

type EventProps = {
    id: number, 
    name: string, 
    date: string, 
    location: string,
};

const events: EventProps[] = [{
    id: 1, 
    name: 'Birthday Party', 
    date: "11/01/2026", 
    location: 'Home' 
}, {
    id: 2, 
    name: "Valentine's Crafting Session", 
    date: "14/02/2026", 
    location: 'Lebow Building' 
}, {
    id: 3, 
    name: "Beach Cleanup", 
    date: "06/03/2026", 
    location: 'Ocean City Beach' 
}, {
    id: 4, 
    name: "Camping Trip", 
    date: "03/03/2026", 
    location: 'Wissahickon Hiking Park' 
}, {
    id: 5, 
    name: "Movie Night", 
    date: "02/01/2026", 
    location: 'Home' 
}, {
    id: 6, 
    name: "Gaming Session", 
    date: "01/20/2026", 
    location: 'Online' 
}];

const noEvents: EventProps[] = [];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Staff Check-in </Text>
      <Text style={styles.h2}> by Ada Anya </Text>

      <Text style={styles.div}>
        <HelloCard name="Ada"/>
        <EventList list={noEvents}/>
      </Text>
    </View>
  );
}

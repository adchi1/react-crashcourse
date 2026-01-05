import { StyleSheet, Text } from 'react-native';

interface EventCard {
  name: string;
  date: string;
  location: string;
}

const EventCard = ({ name, date, location }: EventCard) => {
  return (
    <Text style={styles.div}>
        <Text style={styles.h2}>Hello, {name}</Text>
        <Text style={styles.p}>{date} <br></br> {location}</Text>
        
    </Text>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  div: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 100,
    padding: 50,
    bottom: 200,
  },
  h2: {
    fontSize: 14,
    color: '#d3af63ff'
  },
  p: {
    fontSize: 12,
    color: '#5a4c3aff',
  },
});
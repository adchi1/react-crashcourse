import { Text } from 'react-native';
import styles from '../css/StyleSheet';

interface EventCard {
  name: string;
  date: string;
  location: string;
};

const EventCard = ({ name, date, location }: EventCard) => {
  return (
    <Text style={styles.div}>
        <Text style={styles.h2}>{name}</Text>
        <Text style={styles.p}>Date: {date}</Text>
        <Text style={styles.p}>Venue: {location}</Text> 
    </Text>
  );
};

export default EventCard;
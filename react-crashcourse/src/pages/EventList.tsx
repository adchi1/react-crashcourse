import { ListRenderItem, Text, FlatList, View } from 'react-native';
import EventCard from '../components/EventCard';
import styles from '../css/StyleSheet';

// these are a list of my hardcoded events
const events = [{
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

type ItemProps = {
    id: string, 
    name: string, 
    date: string, 
    location: string,
};

const EventList = () => {
    const data = events.map(event => {
        <Text style={styles.li} key={event.id}>
            <EventCard name={event.name} date={event.date} location={event.location}/>
        </Text>
    });

    return (
        <View style={styles.container}>
            <Text style={styles.h2}> Upcoming Events</Text>
            <FlatList
                data={data}
                renderItem={
                    (event: ItemProps) => <EventCard name={event.name} date={event.date} location={event.location}/>
                }
                keyExtractor={(event: ItemProps) => event.id}
                ListEmptyComponent={<Text style={styles.p}>No events available...</Text>}
            />
        </View>

    );
};

export default EventList;
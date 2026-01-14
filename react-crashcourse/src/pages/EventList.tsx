import { ListRenderItem, Text, FlatList, View } from 'react-native';
import EventCard from '../components/EventCard';
import styles from '../css/StyleSheet';

type EventProps = {
    id: number, 
    name: string, 
    date: string, 
    location: string,
};

interface EventList {
    list: EventProps[],
}

const EventList = ({ list }: EventList) => {
    const renderItem: ListRenderItem<EventProps> = ({item}) => (
        <EventCard name={item.name} date={item.date} location={item.location}/>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.h2}> Upcoming Events</Text>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(event: EventProps) => event.id.toString()}
                ListEmptyComponent={<Text style={styles.p}>No events available...</Text>}
            />
        </View>

    );
};

export default EventList;
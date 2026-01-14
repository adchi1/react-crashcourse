import { StyleSheet, Text } from 'react-native';
import styles from '../src/css/StyleSheet';

interface HelloCard {
  name: string;
}

const HelloCard = ({ name }: HelloCard) => {
  return (
    <Text style={styles.div}>
      <Text style={styles.p}>Hello, {name}</Text>
    </Text>
  );
};

export default HelloCard;
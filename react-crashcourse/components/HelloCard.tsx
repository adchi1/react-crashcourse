import { StyleSheet, Text, View } from 'react-native';

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

  p: {
    fontSize: 12,
    color: '#5a4c3aff',
  },
});
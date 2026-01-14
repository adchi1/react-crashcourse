import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 100,
    backgroundColor: '#f9f7f2ff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  list: {
    flex: 1,
    padding: 50,
    width: 50,
    height: 50,
  },
  h1: {
    fontSize: 18,
    color: '#dc912eff',
  },
  h2: {
    fontSize: 14,
    color: '#d3af63ff'
  },
  div: {
    display: 'flex',
    gap: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: 50,
  },
  p: {
    fontSize: 12,
    color: '#5a4c3aff',
  },
  ul: {
    fontSize: 12,
  },
  li: {
    fontSize: 12,
    color: '#5a4c3aff',
    fontWeight: 'bold',
  }
});

export default styles;
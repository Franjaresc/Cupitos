import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    height: 50,
    width: '80%',
    alignSelf: 'center',
  },
  logo: {
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center',
  },
  logginButton: {
    margin: 10,
    height: 50,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
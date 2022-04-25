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
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerRowCenter: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRowSpaceEvenly: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerRowSpaceBetween: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerColumn: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerColumnCenter: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'justify',
  },
  textBody: {
    textAlign: 'justify',
    fontSize: 20,
  },
  radioButton: {
    alignSelf: 'center',
    height: 50,
    width: '80%',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  editButton: {
    margin: 0,
    height: 40,
    width: '70%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  avatarProfile: {
    margin: 10,
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
});

export default Styles;
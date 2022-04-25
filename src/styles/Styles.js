import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
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
  inputMultiline: {
    margin: 10,
    width: '80%',
    alignSelf: 'center',
  },
  logo: {
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
  logginButton: {
    margin: 10,
    height: 50,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  radioButton: {
    alignSelf: 'center',
    height: 50,
    width: '80%',
  },
  textSignUp: {
    textAlign: 'justify',
    fontSize: 15,
    marginBottom: 10,
    alignSelf: 'center',
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
    fontSize: 15,
    marginBottom: 10,
  },
  textBody: {
    textAlign: 'justify',
    fontSize: 20,
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

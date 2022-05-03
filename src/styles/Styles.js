import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
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
    fontSize: 17,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  editButton: {
    margin: 0,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  avatarProfile: {
    margin: 10,
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  publishButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },
  avatarCupitos: {
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  textTitleCupitos: {
    textAlign: 'center',
    fontSize: 16,
  },
  textCupitos: {
    textAlign: 'justify',
    fontSize: 14,
  },
  containerRowCupitos: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CDCCD7',
    justifyContent: "space-around",
  },
  containerRowSpaceBetweenCupitos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerColumnCupitos: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  containerRowCupitosButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Styles;

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rowNav: {
    backgroundColor: '#000',
    height: 98,
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    marginTop: 12,
    width: 50,
    height: 50,
  },
  rowInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  colTitlePrimary: {
    margin: 20,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimary: {
    color: '#1C2833',
    fontWeight: 'bold',
    fontSize: 25,
  },
  text: {
    fontWeight: '500',
    marginTop: 5,
    fontSize: 15,
    color: '#909497',
  },

  inputTitle: {
    color: '#1C2833',
    fontWeight: 'bold',
    fontSize: 15,
    margin: 0,
    marginLeft: 18,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rowTitleInputEmail: {
    width: '100%',
    marginTop: 25,
  },
  rowTitleInputPassword: {
    width: '100%',
    marginTop: 10,
  },
  rowInputs: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

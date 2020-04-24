import {StyleSheet} from 'react-native';
import {perfectSize, screenHeight} from '../../helpers/deviceHelper';

export default StyleSheet.create({
  modalStyle: {
    marginHorizontal: 0,
    marginBottom: 0,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  container: {
    borderRadius: perfectSize(10),
    height: (screenHeight / 3) * 2,
    backgroundColor: 'black',
    opacity: 0.95,
  },
  wrapper: {
    flex: 1,
    height: '100%',
    borderRadius: perfectSize(10),
  },
  header: {
    flexDirection: 'row',
    paddingVertical: perfectSize(15),
    paddingRight: perfectSize(10),
  },
  titleView: {
    justifyContent: 'center',
    flex: 1,
  },
  headerTitle: {
    fontSize: perfectSize(18),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  closeView: {
    marginVertical: perfectSize(10),
    padding: perfectSize(5),
    position: 'absolute',
    right: 0,
  },
  closeText: {
    fontSize: perfectSize(16),
    color: '#0c77b5',
  },
  messagebox: {
    flex: 0.14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    opacity: 1,
  },
  commentInput: {
    height: 60,
  },
});

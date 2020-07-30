import {StyleSheet} from 'react-native';
import * as Colors from './Colors';

const styles = StyleSheet.create({
  flexible: {
    flex: 1,
  },
  imageThumbnail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  slide1: {
    flex: 1,
    marginTop: 10,
  },
  wrapper: {},
  rowAlignedView: {
    flex: 1,
    flexDirection: 'row',
  },
  boldTitle: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  source: {
    flex: 1,
    color: Colors.basePrimaryColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  ts: {
    flex: 1,
    marginLeft: 10,
    marginBottom: 15,
  },
  screenHeading: {
    flex: 0.07,
    marginTop: 10,
    marginLeft: 5,
    fontSize: 27,
    fontWeight: 'bold',
  },
  progressbarcontainer: {
    flex: 1,
    justifyContent: 'center',
  },
  progressbarhorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default styles;

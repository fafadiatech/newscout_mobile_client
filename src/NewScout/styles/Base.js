import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flexible: {
      flex: 1
    },
    scrollView: {
      flex: 1,
      backgroundColor: '#bab5b5'
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
    cardUnitView: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'stretch',
      borderRadius: 10,
      marginRight: 5,
      marginTop: 9,
      marginBottom: 3,
      marginLeft: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardUnitColoredStrip: {
      flex: 0.25,
      marginLeft: 12,
      marginRight: 12,
      backgroundColor: '#d62828',
      fontSize: 2,
      borderRadius: 20,
    },
    cardUnitImage: {
      flex: 1,
      backgroundColor: 'yellow',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 15,
      marginBottom: 10,
      width: 355,
      height: 180,
      borderRadius: 10,
    },
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
      color: '#d62828',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    ts: {
      flex: 1,
      marginLeft: 10,
      marginBottom: 15,
    },
    cardUnitNextIcon: {
      flex: 0.1,
      alignSelf: 'center',
      marginLeft: 5,
      marginRight: 10,
    },
  });

export default styles;
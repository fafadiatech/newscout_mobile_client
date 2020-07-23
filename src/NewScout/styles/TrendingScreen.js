import {StyleSheet} from 'react-native';
import * as Colors from './Colors';

const componentStyles = StyleSheet.create({
    cardUnitView: {
      flex: 1,
      backgroundColor: Colors.baseBackgroundPrimaryColor,
      alignItems: 'stretch',
      borderRadius: 10,
      marginRight: 5,
      marginTop: 9,
      marginBottom: 3,
      marginLeft: 5,
      shadowColor: Colors.defaultShadowColor,
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
      backgroundColor: Colors.basePrimaryColor,
      fontSize: 2,
      borderRadius: 20,
    },
    cardUnitImage: {
      flex: 1,
      backgroundColor: Colors.baseBackgroundSecondaryColor,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 15,
      marginBottom: 10,
      width: 355,
      height: 180,
      borderRadius: 10,
    },
    cardUnitNextIcon: {
      flex: 0.1,
      alignSelf: 'center',
      marginLeft: 5,
      marginRight: 10,
    },
  });

export default componentStyles;
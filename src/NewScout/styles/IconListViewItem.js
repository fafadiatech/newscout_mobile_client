import {StyleSheet} from 'react-native';
import * as Colors from './Colors';

const componentStyles = StyleSheet.create({
    iconListViewItemView: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: Colors.basePrimaryColor,
        borderRadius: 10,
        marginRight: 5,
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 5,
    },
    iconStyle: {
        flex: 0.25,
        color: Colors.iconColor,
        marginLeft: 15,
        marginRight: 5,
        marginTop: 21,
        marginBottom: 10,
        width: 70,
        height: 70,
        borderRadius: 70,
    },
    captionStyle: {
        flex: 2,
        color: Colors.iconColor,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 10,
    },
    supportingStyle: {
        flex: 1,
        color: Colors.iconColor,
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 25,
    },
    nextIconStyle: {
        flex: 0.15,
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 10,
    }
  });

export default componentStyles;
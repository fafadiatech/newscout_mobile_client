import {StyleSheet} from 'react-native';
import * as Colors from './Colors';

const componentStyles = StyleSheet.create({
    iconGridItemView: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: Colors.basePrimaryColor,
        borderRadius: 10,
        marginRight: 5,
        marginTop: 10,
        marginLeft: 5,
    },
    iconGridItemIconStyle: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 10,
    },
    captionStyle: {
        flex: 1,
        color: Colors.iconColor,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 25,
    }
  });

export default componentStyles;
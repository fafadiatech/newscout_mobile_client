import {StyleSheet} from 'react-native';
import * as Colors from './Colors';

const componentStyles = StyleSheet.create({
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
    coloredStripe: {
        flex: 0.25, 
        marginLeft: 12, 
        marginRight: 12, 
        backgroundColor: Colors.basePrimaryColor, 
        fontSize: 2, 
        borderRadius: 20
    },
    roundedImage: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.baseBackgroundSecondaryColor,
        marginLeft: 7,
        marginTop: 7,
        marginBottom: 10,
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    roundedImageRight: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.baseBackgroundSecondaryColor,
        marginRight: 7,
        marginTop: 7,
        marginBottom: 10,
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    boldTitle: {
        flex: 2,
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    }
  });

export default componentStyles;
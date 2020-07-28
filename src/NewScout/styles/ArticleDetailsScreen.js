import {StyleSheet} from 'react-native';
import * as Colors from './Colors';

const componentStyles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        backgroundColor: Colors.baseBackgroundSecondaryColor,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        marginBottom: 10,
        height: 180,
        borderRadius: 10,
    },
    titleStyle: {
        flex: 0.75,
        marginLeft: 10, 
        fontSize: 20, 
        fontWeight: 'bold'
    },
    blurbStyle: {
        flex: 3,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 17,
    },
    readMoreViewStyle: {
        zIndex: 1,
        backgroundColor: Colors.basePrimaryColor,
        alignItems: 'center',
        borderRadius: 10,
        height: 45,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
    },
    readMoreButtonStyle: {
        color: Colors.iconColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 5,
    },
    bottomBarStyle: {
        flex: 0.20,
        flexDirection: 'row',
        backgroundColor: Colors.basePrimaryColor,
        justifyContent: 'space-around'
    },
    bottomBarIconStyle: {
        flex: 0.1,
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 10,
    },
    moreStoriesStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    }
});

export default componentStyles;
import * as React from 'react';
import {View} from 'react-native';

import * as Colors from '../styles/Colors';

class Separator extends React.Component {
    render(){
        return(
            <View
            style={{
                borderBottomColor: Colors.basePrimaryColor,
                borderBottomWidth: 1,
            }}
            />
        );
    }
}

export default Separator;
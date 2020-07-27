import * as React from 'react';
import {View, Image, Text} from 'react-native';

import * as Colors from '../styles/Colors';

class RightImageAlignedSuggestionItem extends React.Component {
    render(){
        return(
            <View style={{flex: 1, flexDirection:'row', marginTop: 5}}>
                <View style={{flex: 2}}>
                    <Text style={{
                        flex: 2,
                        fontWeight: 'bold',
                        fontSize: 17,
                        margin: 5
                    }}>{this.props.title}</Text>
                    <Text style={{
                        flex: 1,
                        fontWeight: 'bold',
                        fontSize: 12,
                        margin: 5,
                        color: Colors.basePrimaryColor
                    }}>{this.props.source}</Text>
                </View>
                <Image
                    style={{flex: 1, margin: 5, borderRadius: 5}}
                    source={{uri: this.props.coverImage}}
                />            
            </View>
        );
    }
}

export default RightImageAlignedSuggestionItem;
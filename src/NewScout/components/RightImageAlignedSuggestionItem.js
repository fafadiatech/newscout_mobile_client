import * as React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import TimeAgo from 'react-native-timeago';

import * as Colors from '../styles/Colors';

class RightImageAlignedSuggestionItem extends React.Component {
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPressHandler}>
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
                     <Text style={{ flex: 1,
                        marginLeft: 10,
                         marginBottom: 15,}}>
                         <TimeAgo time={this.props.ts} /></Text>
                </View>
                <Image
                    style={{flex: 1, margin: 5, borderRadius: 5}}
                    source={{uri: this.props.coverImage}}
                />            
            </View>
            </TouchableOpacity>
        );
    }
}

export default RightImageAlignedSuggestionItem;